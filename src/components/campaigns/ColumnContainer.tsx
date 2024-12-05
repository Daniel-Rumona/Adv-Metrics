import { Column, Id, Campaign } from '../../types'
import React, { useMemo, useState } from 'react'
import DeleteIcon from '@mui/icons-material/DeleteOutline'
import { Box, Button, InputBase, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import PlusOutlineIcon from '@mui/icons-material/AddOutlined'
import CampaignCard from '../CampaignCard'

interface Props {
  column: Column
  updateColumn: (id: Id, title: string) => void
  createCampaign: (
    columnId: Id,
    newCampaignData: Omit<Campaign, 'id' | 'columnId'>
  ) => void
  deleteCampaign: (id: Id) => void
  campaigns: Campaign[]
}

function ColumnContainer (props: Props) {
  const { column, updateColumn, createCampaign, deleteCampaign, campaigns } =
    props

  const [editMode, setEditMode] = useState(false)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // Count the number of campaigns in the column
  const campaignCount = campaigns.length

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column
    },
    disabled: editMode
  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  if (isDragging) {
    return (
      <Box
        ref={setNodeRef}
        style={style}
        sx={{
          backgroundColor: colors.primary[400],
          width: '350px',
          height: '550px',
          opacity: '40%',
          border: '1px solid',
          borderColor: colors.blueAccent[550],
          maxHeight: '550px',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column'
        }}
      ></Box>
    )
  }

  return (
    <Box
      ref={setNodeRef}
      style={style}
      sx={{
        backgroundColor: colors.primary[400],
        width: '350px',
        height: '550px',
        maxHeight: '550px',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
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
      {/* Column title */}
      <Box
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true)
        }}
        sx={{
          backgroundColor: colors.primary[600],
          fontSize: '1rem',
          height: '60px',
          cursor: 'grab',
          borderRadius: 2,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          padding: 3,
          fontWeight: 'bold',
          border: '4px solid',
          borderColor: colors.primary[400],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '15px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.primary[400],
              paddingX: '2px',
              paddingY: '1px',
              fontSize: '0.875rem',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              marginRight: 10
            }}
          >
            {campaignCount}
          </Box>
          {!editMode && `${column.title}`} {/* Display title and count */}
          {editMode && (
            <InputBase
              sx={{
                backgroundColor: colors.primary[150],
                ':focus': {
                  border: '1px solid',
                  borderColor: colors.redAccent[250]
                },
                borderRadius: '10px',
                outline: 'none',
                paddingX: '2px'
              }}
              value={column.title}
              onChange={e => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false)
              }}
              onKeyDown={e => {
                if (e.key !== 'Enter') return
                setEditMode(false)
              }}
            />
          )}
        </Box>
      </Box>

      {/* Column task container */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          flexDirection: 'column',
          gap: 4,
          padding: 2,
          overflowX: 'hidden',
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
        <SortableContext items={campaigns}>
          {campaigns.map(campaign => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              subtasks={campaign.subtasks}
              deleteCampaign={deleteCampaign}
            ></CampaignCard>
          ))}
        </SortableContext>
      </Box>

      {/* Column footer */}
      <Button
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          padding: 2,
          borderRadius: 2,
          border: '2px solid',
          borderColor: 'transparent',
          backgroundColor: colors.primary[400],
          color: '#fff',
          '&:hover': {
            backgroundColor: colors.primary[500],
            color: colors.blueAccent[500]
          },
          '&:active': {
            backgroundColor: 'common.black'
          }
        }}
        onClick={() => {
          createCampaign(column.id, {
            title: 'New Campaign',
            description: '',
            status: '',
            subtasks: []
          })
        }}
      >
        <PlusOutlineIcon />
        Add Campaign
      </Button>
    </Box>
  )
}

export default ColumnContainer
