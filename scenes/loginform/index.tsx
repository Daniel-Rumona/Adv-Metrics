import React, { useState, useEffect } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper
} from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
import { db, auth } from '../../firebase/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { v4 as uuidv4 } from 'uuid'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import InputAdornment from '@mui/material/InputAdornment'
import QuantLogo from '../../assets/QuantilytixO.png'

interface Platform {
  id: string
  name: string
  handle: string
  password: string
}

interface Item {
  id: number
  name: string
}

interface RegistrationFormProps {
  onLogin: () => void
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactNumber: ''
  })
  const [platforms, setPlatforms] = useState<Platform[]>([])
  const [platformInput, setPlatformInput] = useState({ name: '', handle: '', password: '' })
  const [competitors, setCompetitors] = useState<Item[]>([])
  const [competitorInput, setCompetitorInput] = useState('')
  const [showPassword, setShowPassword] = useState(false)
// Toggle handler
  const togglePasswordVisibility = () => setShowPassword(prev => !prev)
  const [currentEdit, setCurrentEdit] = useState<Platform | null>(null)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) setUserId(user.uid)
      else setUserId(null)
    })
    return () => unsubscribe()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPlatformInput(prev => ({ ...prev, [name]: value }))
  }

  const handleAddPlatform = () => {
    const { name, handle, password } = platformInput
    if (!name.trim() || !handle.trim() || !password.trim()) return
    const newPlatform: Platform = { id: uuidv4(), name, handle, password }
    setPlatforms(prev => [...prev, newPlatform])
    setPlatformInput({ name: '', handle: '', password: '' })
  }

  const handleAddCompetitor = () => {
    if (!competitorInput.trim()) return
    setCompetitors(prev => [...prev, { id: Date.now(), name: competitorInput.trim() }])
    setCompetitorInput('')
  }

  const handleDeletePlatform = (id: string) => {
    setPlatforms(prev => prev.filter(p => p.id !== id))
  }

  const handleDeleteCompetitor = (id: number) => {
    setCompetitors(prev => prev.filter(c => c.id !== id))
  }

  const handleEditPlatform = (platform: Platform) => {
    setCurrentEdit(platform)
    setModalOpen(true)
  }

  const handleCompetitorChange = (
      event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompetitorInput(event.target.value)
  }

  const handleSaveEdit = () => {
    if (currentEdit) {
      setPlatforms(prev => prev.map(p => (p.id === currentEdit.id ? currentEdit : p)))
      setModalOpen(false)
      setCurrentEdit(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userId) return alert("User not logged in.")
    try {
      await setDoc(doc(db, 'users', userId), {
        companyName: formData.companyName,
        contactNumber: formData.contactNumber,
        platforms,
        competitors
      })
      onLogin()
    } catch (error) {
      alert('Failed to register. Please try again.')
    }
  }

  return (
      <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
            position: 'relative'
          }}
      >
        <Box
            sx={{
              width: '100%',
              maxWidth: 600,
              p: 4,
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              zIndex: 2
            }}
        >
          <Paper sx={{ mb: 4, p: 2, background: 'linear-gradient(90deg, #00c6ff, #0072ff)', borderRadius: 2, color: 'white', textAlign: 'center' }}>
            <Typography variant='h5' fontWeight='bold'>Complete Your Business Setup</Typography>
            <Typography variant='body2'>Add your company details, platforms and competitors to start tracking performance.</Typography>
          </Paper>

          <form onSubmit={handleSubmit}>
            <TextField fullWidth label='Company Name' name='companyName' value={formData.companyName} onChange={handleChange} margin='normal' variant='filled' InputProps={{ style: { color: 'white' } }} />
            <TextField fullWidth label='Contact Number' name='contactNumber' value={formData.contactNumber} onChange={handleChange} margin='normal' variant='filled' InputProps={{ style: { color: 'white' } }} />

            <Typography variant='h6' mt={2}>Platforms</Typography>
            <Box display="flex" gap={1} mb={2} alignItems="center">
              <TextField
                  label="Name"
                  name="name"
                  value={platformInput.name}
                  onChange={handlePlatformChange}
                  placeholder="e.g. Facebook"
                  size="small"
                  sx={{ flex: 1 }}
              />
              <TextField
                  label="Handle"
                  name="handle"
                  value={platformInput.handle}
                  onChange={handlePlatformChange}
                  placeholder="@yourHandle"
                  size="small"
                  sx={{ flex: 1 }}
              />
              <TextField
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={platformInput.password}
                  onChange={handlePlatformChange}
                  placeholder="Enter Password"
                  size="small"
                  sx={{ flex: 1 }}
                  InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                    )
                  }}
              />

              <Button
                  onClick={handleAddPlatform}
                  variant="contained"
                  sx={{ whiteSpace: 'nowrap', height: '40px' }}
              >
                Add
              </Button>
            </Box>

            <List>
              {platforms.map(platform => (
                  <ListItem key={platform.id} sx={{ justifyContent: 'space-between' }}>
                    <ListItemText primary={`${platform.name} (${platform.handle})`} secondary={`Password: ${platform.password}`} />
                    <Box>
                      <IconButton onClick={() => handleEditPlatform(platform)}><Edit /></IconButton>
                      <IconButton onClick={() => handleDeletePlatform(platform.id)}><Delete /></IconButton>
                    </Box>
                  </ListItem>
              ))}
            </List>

            <Typography variant='h6' mt={2}>Competitors</Typography>
            <Box display='flex' gap={1} mb={2}>
              <TextField label='Competitor Name' value={competitorInput} onChange={handleCompetitorChange} placeholder='e.g. Rival Company' />
              <Button onClick={handleAddCompetitor} variant='contained'>Add</Button>
            </Box>
            <List>
              {competitors.map(competitor => (
                  <ListItem key={competitor.id} sx={{ justifyContent: 'space-between' }}>
                    <ListItemText primary={competitor.name} />
                    <IconButton onClick={() => handleDeleteCompetitor(competitor.id)}><Delete /></IconButton>
                  </ListItem>
              ))}
            </List>

            <Button type='submit' variant='contained' fullWidth sx={{ mt: 3 }}>Register</Button>
          </form>
        </Box>

        <Box sx={{ position: 'absolute', bottom: 20, right: 30, zIndex: 1 }}>
          <img src={QuantLogo} alt='QuantLogo' style={{ width: 120, opacity: 0.85 }} />
        </Box>
      </Box>
  )
}

export default RegistrationForm
