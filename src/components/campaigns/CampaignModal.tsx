import React from 'react'
import {
  Modal,
  Box,
  Typography,
  Checkbox,
  Select,
  MenuItem,
  Divider,
  FormControl,
  IconButton
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Campaign, Id } from '../../types'

interface CampaignModalProps {
  open: boolean
  onClose: () => void
  campaign: Campaign
  onSubtaskToggle: (subtaskId: Id) => void
  onStatusChange: (newStatus: string) => void
}

const CampaignModal: React.FC<CampaignModalProps> = ({
  open,
  onClose,
  campaign,
  onSubtaskToggle,
  onStatusChange
}) => {
  // Get the count of completed subtasks
  const completedSubtasksCount = campaign.subtasks.filter(
    subtask => subtask.isCompleted
  ).length

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='campaign-modal-title'
      aria-describedby='campaign-modal-description'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4
        }}
      >
        {/* Modal Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography id='campaign-modal-title' variant='h6'>
            {campaign.title}
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>

        {/* Campaign Description */}
        <Typography
          id='campaign-modal-description'
          sx={{ mt: 2, color: 'text.secondary', fontSize: '0.9rem' }}
        >
          {campaign.description}
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Subtasks Section */}
        <Typography variant='body2' fontWeight='bold' gutterBottom>
          Subtasks ({completedSubtasksCount} of {campaign.subtasks.length})
        </Typography>

        {campaign.subtasks.map(subtask => (
          <Box
            key={subtask.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 1,
              bgcolor: 'background.default',
              p: 1,
              borderRadius: 1
            }}
          >
            <Checkbox
              sx={{
                color: 'pink',
                '&.Mui-checked': {
                  color: 'brown'
                }
              }}
              checked={subtask.isCompleted}
              onChange={() => onSubtaskToggle(subtask.id)} // Toggle the specific subtask by ID
            />
            <Typography
              sx={{
                textDecoration: subtask.isCompleted ? 'line-through' : 'none',
                opacity: subtask.isCompleted ? 0.6 : 1
              }}
            >
              {subtask.title}
            </Typography>
          </Box>
        ))}

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Status Section */}
        <Typography variant='body2' fontWeight='bold' gutterBottom>
          Current Status
        </Typography>
        <FormControl fullWidth>
          <Select
            value={campaign.status}
            onChange={e => onStatusChange(e.target.value)} // Change the campaign's status
            fullWidth
            sx={{ mt: 1 }}
          >
            <MenuItem value='Active'>Active</MenuItem>
            <MenuItem value='Todo'>Todo</MenuItem>
            <MenuItem value='Completed'>Completed</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Modal>
  )
}

export default CampaignModal
