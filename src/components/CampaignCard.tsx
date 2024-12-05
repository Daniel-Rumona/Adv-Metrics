import React, { useState } from 'react'
import { Box, Typography, Paper, Button, useTheme } from '@mui/material'
import { Subtask, Campaign, Id } from '../types'
import DeleteIcon from '@mui/icons-material/DeleteOutline'
import { tokens } from '../theme'
import { CSS } from '@dnd-kit/utilities'
import CampaignModal from './campaigns/CampaignModal'
import { useSortable } from '@dnd-kit/sortable'

interface Props {
  campaign: Campaign
  subtasks: Subtask[]
  deleteCampaign: (id: Id) => void
}

function CampaignCard ({ campaign, subtasks, deleteCampaign }: Props) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [mouseIsOver, setMouseIsOver] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [updatedStatus, setUpdatedStatus] = useState(campaign.status)
  const [updatedSubtasks, setUpdatedSubtasks] = useState(subtasks)

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: campaign.id,
    data: {
      type: 'Campaign',
      campaign
    },
    disabled: editMode
  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  const completedSubtasks = updatedSubtasks.filter(
    subtask => subtask.isCompleted
  ).length

  // Function to handle subtask toggle
  const onSubtaskToggle = (subtaskId: Id) => {
    setUpdatedSubtasks(prevSubtasks =>
      prevSubtasks.map(subtask =>
        subtask.id === subtaskId
          ? { ...subtask, isCompleted: !subtask.isCompleted }
          : subtask
      )
    )
  }

  // Function to handle campaign status change
  const onStatusChange = (newStatus: string) => {
    setUpdatedStatus(newStatus)
  }

  const toggleEditMode = () => {
    setEditMode(prev => !prev)
    setMouseIsOver(false)
  }

  const onClose = () => {
    setEditMode(false)
  }

  if (isDragging) {
    return (
      <Paper
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        onClick={toggleEditMode}
        elevation={3}
        sx={{
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          height: '100px',
          width: '300px',
          opacity: 0.5,
          border: '1px solid',
          borderColor: colors.redAccent[200],
          backgroundColor: 'background.paper',
          color: 'text.primary',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      ></Paper>
    )
  }

  return (
    <Box sx={{ position: 'relative' }}>
      {editMode && (
        <CampaignModal
          open={editMode}
          onClose={onClose}
          campaign={{
            ...campaign,
            status: updatedStatus,
            subtasks: updatedSubtasks // Pass the updated subtasks to the modal
          }}
          onSubtaskToggle={onSubtaskToggle}
          onStatusChange={onStatusChange}
        />
      )}
      <Paper
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        onClick={toggleEditMode}
        elevation={3}
        sx={{
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          height: '100px',
          width: '320px',
          backgroundColor: 'background.paper',
          color: 'text.primary',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          opacity: editMode ? 0.5 : 1, // Reduce opacity when in editMode
          pointerEvents: editMode ? 'none' : 'auto' // Prevent interactions when in editMode
        }}
        onMouseEnter={() => setMouseIsOver(true)}
        onMouseLeave={() => setMouseIsOver(false)}
      >
        <Box>
          <Typography variant='h6' gutterBottom>
            {campaign.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {`${completedSubtasks} out of ${updatedSubtasks.length} subtasks completed`}
          </Typography>
        </Box>
        {mouseIsOver && (
          <Button
            sx={{
              color: colors.grey[400],
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              padding: '30px',
              ':hover': {
                color: colors.redAccent[400]
              }
            }}
            onClick={e => {
              e.stopPropagation()
              deleteCampaign(campaign.id)
            }}
          >
            <DeleteIcon />
          </Button>
        )}
      </Paper>
    </Box>
  )
}

export default CampaignCard
