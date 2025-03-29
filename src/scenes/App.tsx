import React, { useEffect, useState } from 'react'
import { ColorModeContext, useMode } from './theme'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import SideDrawer from './scenes/global/Sidedrawer'
import Dashboard from './scenes/dashboard'
import AudienceAnalysis from './scenes/audience-analysis'
import SentimentAnalysis from './scenes/sentiment-analysis'
import GeographicalView from './scenes/geographical-view'
import TrendingTopics from './scenes/trending-topics'
import PostMetric from './scenes/posts-metrics'
import EngagementMetrics from './scenes/engagement-metrics'
import ChatInterface from './scenes/chat-interface'
import CampaignAnalysis from './scenes/campaign-analysis'
import ComparativeCompanyAnalysis from './scenes/comparative-analysis'
import RegistrationForm from './scenes/loginform'
import AuthForm from './scenes/auth-form'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebaseConfig'

// Layout component for logged-in views
const MainLayout: React.FC<{ onLogout: () => void }> = ({ onLogout }) => (
    <Box
        className='app'
        sx={{
            display: 'flex',
            height: '100vh',
            overflow: 'hidden'
        }}
    >
        <SideDrawer />
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}
        >
            <Topbar onLogout={onLogout} />
            <Box
                sx={{
                    flex: 1,
                    overflowY: 'auto'
                }}
            >
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/audience-analysis' element={<AudienceAnalysis />} />
                    <Route path='/sentiment-analysis' element={<SentimentAnalysis />} />
                    <Route path='/geographical-view' element={<GeographicalView />} />
                    <Route path='/trending-topics' element={<TrendingTopics />} />
                    <Route path='/posts-metrics' element={<PostMetric />} />
                    <Route path='/engagement-metrics' element={<EngagementMetrics />} />
                    <Route path='/chat-interface' element={<ChatInterface />} />
                    <Route path='/campaign-analysis' element={<CampaignAnalysis />} />
                    <Route
                        path='/comparative-analysis'
                        element={<ComparativeCompanyAnalysis />}
                    />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </Box>
        </Box>
    </Box>
)

function App () {
    const [theme, colorMode] = useMode()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isProfileComplete, setIsProfileComplete] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setIsLoggedIn(!!user)
            // TODO: Check Firestore if profile is complete
            // For now, assume false on login
            setIsProfileComplete(false)
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const handleAuthSuccess = (isNewUser: boolean) => {
        setIsLoggedIn(true)
        setIsProfileComplete(!isNewUser) // new users go to RegistrationForm
    }

    const handleProfileSubmit = () => {
        setIsProfileComplete(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setIsProfileComplete(false)
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    {!isLoggedIn ? (
                        <Route path='*' element={<AuthForm onAuthSuccess={handleAuthSuccess} />} />
                    ) : !isProfileComplete ? (
                        <Route
                            path='*'
                            element={<RegistrationForm onLogin={handleProfileSubmit} />}
                        />
                    ) : (
                        <Route path='/*' element={<MainLayout onLogout={handleLogout} />} />
                    )}
                </Routes>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
