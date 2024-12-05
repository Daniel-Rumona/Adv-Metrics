import React, { useState } from 'react'
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  IconButton,
  Divider,
  colors,
  useTheme
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import RemoveIcon from '@mui/icons-material/RemoveCircle'
import { Campaign, Subtask, Id } from '../../types'
import { tokens } from '../../theme'

interface CampaignDetailsModalProps {
  open: boolean
  campaign: Campaign
  onClose: () => void
  onSave: (campaign: Omit<Campaign, 'id'>) => void // Pass campaign without id
  columnId: Id // Correctly keep columnId here
}

const CampaignDetailsModal: React.FC<CampaignDetailsModalProps> = ({
  open,
  onClose,
  onSave,
  campaign,
  columnId // Use columnId directly
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [status, setStatus] = useState<string>('Active') // Default status
  const [subtasks, setSubtasks] = useState<Subtask[]>([
    { id: Date.now().toString(), title: '', isCompleted: false }
  ])

  const handleAddSubtask = () => {
    setSubtasks([
      ...subtasks,
      { id: Date.now().toString(), title: '', isCompleted: false }
    ])
  }

  const handleSubtaskChange = (index: number, newTitle: string) => {
    const updatedSubtasks = [...subtasks]
    updatedSubtasks[index].title = newTitle
    setSubtasks(updatedSubtasks)
  }

  const handleRemoveSubtask = (index: number) => {
    const updatedSubtasks = subtasks.filter((_, i) => i !== index)
    setSubtasks(updatedSubtasks)
  }

  const handleSave = () => {
    if (!title || !description) {
      alert('Title and Description are required.')
      return
    }

    onSave({
      title,
      columnId, // Use the correct columnId prop
      description,
      status,
      subtasks
    })
    onClose()
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='campaign-modal-title'
      aria-describedby='campaign-modal-description'
      sx={{
        overflow: 'auto', // Enables full-screen scrolling
        display: 'flex', // Centers the modal
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: 400,
          maxHeight: '80vh', // Restricts height to 80% of the viewport
          overflowY: 'auto', // Enables internal scrolling for content
          bgcolor: 'background.paper',
          color: 'text.primary',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          position: 'relative', // For dynamic positioning
          mx: 'auto', // Center horizontally
          top: '10%', // Adjusts vertical position (use relative value like 10%)
          transform: 'translateY(-10%)', // Ensures alignment across resolutions
          '::-webkit-scrollbar': {
            width: '5px'
          },
          '::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '5px',
            padding: '2px'
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#555'
          }
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id='campaign-modal-title' variant='h6' gutterBottom>
          New Campaign
        </Typography>
        <Divider sx={{ my: 2 }} />
        <TextField
          fullWidth
          label='Campaign Title'
          variant='outlined'
          value={title}
          onChange={e => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label='Description'
          variant='outlined'
          multiline
          rows={4}
          value={description}
          onChange={e => setDescription(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Divider sx={{ my: 2 }} />
        <Typography variant='body2' gutterBottom>
          Subtasks
        </Typography>
        {subtasks.map((subtask, index) => (
          <Box key={subtask.id} sx={{ display: 'flex', gap: 1, mb: 1 }}>
            <TextField
              fullWidth
              variant='outlined'
              placeholder='Subtask Title'
              value={subtask.title}
              onChange={e => handleSubtaskChange(index, e.target.value)}
            />
            <Button
              variant='contained'
              color='error'
              onClick={() => handleRemoveSubtask(index)}
              sx={{
                marginTop: '10px',
                minWidth: 0, // Prevents default button width
                width: '35px', // Makes it a square
                height: '35px', // Ensures circular shape
                borderRadius: '50%' // Rounds the edges
              }}
            >
              <RemoveIcon fontSize='small' />
            </Button>
          </Box>
        ))}
        <Button
          fullWidth
          variant='contained'
          color='primary'
          onClick={handleAddSubtask}
          sx={{ mb: 2 }}
        >
          Add Subtask
        </Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant='body2' gutterBottom>
          Status
        </Typography>
        <Select
          fullWidth
          value={status}
          onChange={e => setStatus(e.target.value)}
          sx={{ mb: 2 }}
        >
          <MenuItem value='Active'>Active</MenuItem>
          <MenuItem value='Completed'>Completed</MenuItem>
          <MenuItem value='Upcoming'>Upcoming</MenuItem>
        </Select>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSave}
            sx={{ width: '100%', borderRadius: '15px' }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default CampaignDetailsModal
