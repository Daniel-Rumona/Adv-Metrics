import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'

interface Platform {
  id: number
  name: string
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
    email: '',
    password: '',
    contactNumber: ''
  })

  const [platforms, setPlatforms] = useState<Platform[]>([])
  const [platformInput, setPlatformInput] = useState({ name: '', password: '' })
  const [competitors, setCompetitors] = useState<Item[]>([])
  const [competitorInput, setCompetitorInput] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [currentEdit, setCurrentEdit] = useState<Platform | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePlatformChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setPlatformInput(prev => ({ ...prev, [name]: value }))
  }

  const handleCompetitorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompetitorInput(event.target.value)
  }

  const handleAddPlatform = () => {
    if (!platformInput.name.trim() || !platformInput.password.trim()) return

    const newPlatform: Platform = {
      id: Date.now(),
      name: platformInput.name.trim(),
      password: platformInput.password.trim()
    }

    setPlatforms(prev => [...prev, newPlatform])
    setPlatformInput({ name: '', password: '' })
  }

  const handleAddCompetitor = () => {
    if (!competitorInput.trim()) return

    const newCompetitor: Item = { id: Date.now(), name: competitorInput.trim() }
    setCompetitors(prev => [...prev, newCompetitor])
    setCompetitorInput('')
  }

  const handleDeletePlatform = (id: number) => {
    setPlatforms(prev => prev.filter(platform => platform.id !== id))
  }

  const handleDeleteCompetitor = (id: number) => {
    setCompetitors(prev => prev.filter(competitor => competitor.id !== id))
  }

  const handleEditPlatform = (platform: Platform) => {
    setCurrentEdit(platform)
    setModalOpen(true)
  }

  const handleSaveEdit = () => {
    if (currentEdit) {
      setPlatforms(prev =>
        prev.map(platform =>
          platform.id === currentEdit.id ? currentEdit : platform
        )
      )
      setModalOpen(false)
      setCurrentEdit(null)
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form Data:', {
      ...formData,
      platforms,
      competitors
    })
    onLogin() // Call the login handler
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        px: 2,
        backgroundColor: 'background.default'
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          width: '100%',
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper',
          mt: 3,
          mb: 3
        }}
      >
        <Typography variant='h5' textAlign='center' mb={3}>
          Social Media Analytics Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <TextField
            fullWidth
            label='Company Name'
            name='companyName'
            variant='outlined'
            margin='normal'
            required
            value={formData.companyName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label='Email'
            name='email'
            type='email'
            variant='outlined'
            margin='normal'
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label='Password'
            name='password'
            type='password'
            variant='outlined'
            margin='normal'
            required
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label='Contact Number'
            name='contactNumber'
            type='tel'
            variant='outlined'
            margin='normal'
            value={formData.contactNumber}
            onChange={handleChange}
          />

          {/* Platforms */}
          <Typography variant='h6' mt={2}>
            Platforms
          </Typography>
          <Box display='flex' gap={1} mb={2}>
            <TextField
              label='Platform Name'
              name='name'
              value={platformInput.name}
              onChange={handlePlatformChange}
              placeholder='Enter Platform Name'
            />
            <TextField
              label='Password'
              name='password'
              value={platformInput.password}
              onChange={handlePlatformChange}
              placeholder='Enter Password'
            />
            <Button onClick={handleAddPlatform} variant='contained'>
              Add
            </Button>
          </Box>
          <List>
            {platforms.map(platform => (
              <ListItem
                key={platform.id}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <ListItemText
                  primary={`${platform.name} (Password: ${platform.password})`}
                />
                <Box>
                  <IconButton onClick={() => handleEditPlatform(platform)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeletePlatform(platform.id)}>
                    <Delete />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>

          {/* Competitors */}
          <Typography variant='h6' mt={2}>
            Competitors
          </Typography>
          <Box display='flex' gap={1} mb={2}>
            <TextField
              label='Competitor Name'
              value={competitorInput}
              onChange={handleCompetitorChange}
              placeholder='Enter Competitor Name'
            />
            <Button onClick={handleAddCompetitor} variant='contained'>
              Add
            </Button>
          </Box>
          <List>
            {competitors.map(competitor => (
              <ListItem
                key={competitor.id}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <ListItemText primary={competitor.name} />
                <IconButton
                  onClick={() => handleDeleteCompetitor(competitor.id)}
                >
                  <Delete />
                </IconButton>
              </ListItem>
            ))}
          </List>

          {/* Edit Modal */}
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                p: 4,
                boxShadow: 24,
                borderRadius: 2
              }}
            >
              <Typography variant='h6' mb={2}>
                Edit Platform
              </Typography>
              <TextField
                fullWidth
                label='Platform Name'
                value={currentEdit?.name || ''}
                onChange={e =>
                  setCurrentEdit(prev =>
                    prev ? { ...prev, name: e.target.value } : null
                  )
                }
              />
              <TextField
                fullWidth
                label='Platform Password'
                value={currentEdit?.password || ''}
                sx={{ mt: 2 }}
                onChange={e =>
                  setCurrentEdit(prev =>
                    prev ? { ...prev, password: e.target.value } : null
                  )
                }
              />
              <Button
                variant='contained'
                sx={{ mt: 2 }}
                fullWidth
                onClick={handleSaveEdit}
              >
                Save
              </Button>
            </Box>
          </Modal>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{ mt: 3 }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default RegistrationForm
