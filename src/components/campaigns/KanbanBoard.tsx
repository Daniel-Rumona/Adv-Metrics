import React, { useMemo, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Alert, Box, Button, useTheme } from '@mui/material'
import PlusOutlineIcon from '@mui/icons-material/AddOutlined'
import ColumnContainer from './ColumnContainer'
import { Column, Id, Campaign } from '../../types'
import { tokens } from '../../theme'
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import CampaignDetailsModal from './CampaignDetailsModal'
import CampaignCard from '../CampaignCard'
import mockData from '../../data/mockData'

function KanbanBoard () {
  const [columns, setColumns] = useState<Column[]>([])
  const columnsId = useMemo(() => columns.map(col => col.id), [columns])
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [activeColumn, setActiveColumn] = useState<Column | null>(null)
  const [activeCampaign, setActiveCampaign] = useState<Campaign | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentCampaign, setCurrentCampaign] = useState<Campaign | null>(null)
  const [currentColumnId, setCurrentColumnId] = useState<Id | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5 // 5px
      }
    })
  )

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // Initialize default columns
  useEffect(() => {
    if (columns.length === 0) {
      const defaultColumns = [
        { id: generateID(), title: 'Active' },
        { id: generateID(), title: 'Todo' },
        { id: generateID(), title: 'Completed' }
      ]
      setColumns(defaultColumns)

      // Fetch campaigns and assign them to the appropriate columns
      const fetchedCampaigns = mockData.mockCampaignActivity.map(campaign => {
        const columnId =
          campaign.status === 'Active'
            ? defaultColumns[0].id
            : campaign.status === 'Todo'
            ? defaultColumns[1].id
            : defaultColumns[2].id
        return { ...campaign, columnId }
      })

      setCampaigns(fetchedCampaigns)
    }
  }, [columns])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowX: 'auto',
        overflowY: 'hidden',
        paddingX: '10px',
        paddingTop: '20px'
      }}
    >
      {/* Add Column Button */}
      {/* <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          height: '50px',
          width: '200px',
          cursor: 'pointer',
          borderRadius: '10px',
          color: '#fff',
          backgroundColor: colors.primary[400],
          border: '2px solid',
          borderColor: colors.grey[100],
          padding: 1,
          marginBottom: 3,
          '&:hover': {
            boxShadow: `0 0 10px ${colors.primary[400]}`,
            borderColor: colors.primary[400]
          }
        }}
        onClick={createColumn}
      >
        <PlusOutlineIcon />
        Add Column
      </Button> */}
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 4
          }}
        >
          <SortableContext items={columnsId}>
            {columns.map(col => (
              <ColumnContainer
                key={col.id}
                column={col}
                updateColumn={updateColumn}
                createCampaign={() => {
                  setCurrentColumnId(col.id)
                  setCurrentCampaign(null) // Clear the current campaign for new creation
                  setIsModalOpen(true)
                }}
                deleteCampaign={deleteCampaign}
                campaigns={campaigns.filter(
                  campaign => campaign.columnId === col.id
                )}
                // onCampaignClick={campaign => {
                //   setCurrentCampaign(campaign)
                //   setCurrentColumnId(campaign.columnId)
                //   setIsModalOpen(true)
                // }}
              />
            ))}
          </SortableContext>
        </Box>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                updateColumn={updateColumn}
                createCampaign={(columnId, newCampaignData) => {
                  createCampaign(columnId, newCampaignData)
                }}
                deleteCampaign={deleteCampaign}
                campaigns={campaigns.filter(
                  campaign => campaign.columnId === activeColumn.id
                )}

                // onCampaignClick={campaign => {
                //   setCurrentCampaign(campaign)
                //   setCurrentColumnId(campaign.columnId)
                //   setIsModalOpen(true)
                // }}
              />
            )}
            {activeCampaign && (
              <CampaignCard
                campaign={activeCampaign}
                deleteCampaign={deleteCampaign}
                subtasks={activeCampaign.subtasks}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      {/* CampaignDetailsModal */}
      <CampaignDetailsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={newCampaign => {
          createCampaign(currentColumnId!, newCampaign)
        }}
        columnId={currentColumnId!}
        campaign={
          currentCampaign || {
            id: generateID(),
            title: '',
            description: '',
            status: 'Active',
            subtasks: [],
            columnId: currentColumnId!
          }
        }
      />
    </Box>
  )

  function createCampaign (
    columnId: Id,
    newCampaignData: Omit<Campaign, 'id' | 'columnId'>
  ) {
    const newCampaign: Campaign = {
      id: generateID(),
      columnId,
      ...newCampaignData
    }
    setCampaigns(prev => [...prev, newCampaign])
  }
  function deleteCampaign (id: Id) {
    const newCampaigns = campaigns.filter(campaign => campaign.id !== id)
    setCampaigns(newCampaigns)
  }

  function createColumn () {
    const columnToAdd: Column = {
      id: generateID(),
      title: `Column ${columns.length + 1}`
    }
    setColumns([...columns, columnToAdd])
  }

  function updateColumn (id: Id, title: string) {
    const newColumns = columns.map(col => {
      if (col.id !== id) return col
      return { ...col, title }
    })
    setColumns(newColumns)
  }

  function onDragStart (event: DragStartEvent) {
    if (event.active.data.current?.type === 'Column') {
      setActiveColumn(event.active.data.current.column)
      return
    }
    if (event.active.data.current?.type === 'Campaign') {
      setActiveCampaign(event.active.data.current.campaign)
      return
    }
  }

  function onDragEnd (event: DragEndEvent) {
    setActiveCampaign(null)
    setActiveColumn(null)

    const { active, over } = event
    if (!over) return
    const activeColumnId = active.id
    const overColumnId = over.id

    if (activeColumnId === overColumnId) return

    setColumns(columns => {
      const activeColumnIndex = columns.findIndex(
        col => col.id === activeColumnId
      )
      const overColumnIndex = columns.findIndex(col => col.id === overColumnId)

      return arrayMove(columns, activeColumnIndex, overColumnIndex)
    })
  }
  function onDragOver (event: DragOverEvent) {
    const { active, over } = event
    if (!over) return
    const activeId = active.id
    const overId = over.id

    if (activeId === overId) return
    const isActiveACampaign = active.data.current?.type === 'Campaign'
    const isOverACampaign = over.data.current?.type === 'Campaign'
    if (!isActiveACampaign) return
    // Dropping a campaign over another campaign
    if (isActiveACampaign && isOverACampaign) {
      setCampaigns(campaigns => {
        const activeIndex = campaigns.findIndex(t => t.id === activeId)
        const overIndex = campaigns.findIndex(t => t.id === overId)

        campaigns[activeIndex].columnId = campaigns[overIndex].columnId

        return arrayMove(campaigns, activeIndex, overIndex)
      })
    }
    const isOverAColumn = over.data.current?.type === 'Column'
    // Dropping a campaign over another column
    if (isActiveACampaign && isOverAColumn) {
      setCampaigns(campaigns => {
        const activeIndex = campaigns.findIndex(t => t.id === activeId)

        campaigns[activeIndex].columnId = overId

        return arrayMove(campaigns, activeIndex, activeIndex)
      })
    }
  }
}

function generateID () {
  return Math.floor(Math.random() * 10001)
}

export default KanbanBoard
