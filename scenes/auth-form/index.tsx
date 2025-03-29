import React, { useState } from 'react'
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Avatar
} from '@mui/material'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential
} from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'
import GoogleIcon from '@mui/icons-material/Google'
import QuantLogo from '../../assets/QuantilytixO.png'

interface AuthFormProps {
    onAuthSuccess: (isNewUser: boolean) => void
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuthSuccess }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignUp, setIsSignUp] = useState(false)

    const handleSignUpWithEmail = async () => {
        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
            onAuthSuccess(true)
        } catch (error) {
            alert('Sign up failed: ' + (error as any).message)
        }
    }

    const handleLoginWithEmail = async () => {
        try {
            const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password)
            onAuthSuccess(false)
        } catch (error) {
            alert('Login failed: ' + (error as any).message)
        }
    }

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const result: UserCredential = await signInWithPopup(auth, provider)
            const isNewUser = result._tokenResponse?.isNewUser ?? false
            onAuthSuccess(isNewUser)
        } catch (error) {
            alert('Google Sign-In failed: ' + (error as any).message)
        }
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
                position: 'relative'
            }}
        >
            {/* Main Glass Card */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 450,
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                {/* Welcome Banner */}
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        mb: 4,
                        textAlign: 'center',
                        borderRadius: 2,
                        background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
                        color: 'white'
                    }}
                >
                    <Typography variant="h5" fontWeight="bold">
                        Welcome to Adv Metrix Media Analytics 📊
                    </Typography>
                    <Typography variant="body2">
                        Monitor your social media performance. Sign up or log in to get started.
                    </Typography>
                </Paper>

                {/* Email/Password Form Always Visible */}
                <Typography
                    variant="h5"
                    textAlign="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                        color: '#ffffff',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
                        mb: 2
                    }}
                >
                    {isSignUp ? 'Create an Account' : 'Log In'}
                </Typography>


                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    InputProps={{ style: { color: '#fff', background: 'rgba(255,255,255,0.1)' } }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    InputProps={{ style: { color: '#fff', background: 'rgba(255,255,255,0.1)' } }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={isSignUp ? handleSignUpWithEmail : handleLoginWithEmail}
                >
                    {isSignUp ? 'Create Account' : 'Log In'}
                </Button>

                {/* Only show Google button on sign up */}
                {isSignUp && (
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                            mt: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1
                        }}
                        onClick={handleGoogleLogin}
                    >
                        <GoogleIcon />
                        Sign Up with Google
                    </Button>
                )}

                {/* Toggle */}
                <Typography
                    sx={{
                        mt: 3,
                        textAlign: 'center',
                        color: '#90caf9',
                        fontWeight: 600,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            textDecoration: 'underline',
                            color: '#42a5f5'
                        }
                    }}
                    onClick={() => setIsSignUp(prev => !prev)}
                >
                    {isSignUp ? 'Already have an account? Log In' : 'Not registered? Sign Up'}
                </Typography>

            </Box>

            {/* QuantLogo in Bottom Right */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 30,
                    zIndex: 1
                }}
            >
                <img
                    src={QuantLogo}
                    alt="QuantLogo"
                    style={{
                        width: 120,
                        opacity: 0.8
                    }}
                />
            </Box>
        </Box>
    )
}

export default AuthForm
