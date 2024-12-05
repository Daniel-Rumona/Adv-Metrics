import React, { useState } from 'react'
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

  const handleLogin = () => {
    setIsLoggedIn(true) // Triggered when user logs in
  }

  const handleLogout = () => {
    setIsLoggedIn(false) // Triggered when user logs out
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {isLoggedIn ? (
            <Route path='/*' element={<MainLayout onLogout={handleLogout} />} />
          ) : (
            <>
              <Route
                path='/login'
                element={<RegistrationForm onLogin={handleLogin} />}
              />
              <Route path='*' element={<Navigate to='/login' />} />
            </>
          )}
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
