import { Box, SelectChangeEvent, Typography } from '@mui/material'
import React, { useState } from 'react'
import TimelineChart from '../../charts/TimelineChart'
import UniversalSelectBox from '../../components/UniversalSelectBox'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
// import CampaignListPage from './CampaignList'
import KanbanBoard from '../../components/campaigns/KanbanBoard'

const CampaignAnalysis: React.FC = () => {
  type Aspect = 'Timeline' | 'Manage Campaigns' // Define available aspects

  const [selectedAspect, setSelectedAspect] = useState<Aspect>('Timeline')

  const handleAspectChange = (event: SelectChangeEvent<string>) => {
    setSelectedAspect(event.target.value as Aspect) // Cast to Aspect type
  }

  return (
    <Box ml={'10px'}>
      {/* Header Section */}
      <Box display='flex' mb={2}>
        <Typography ml={2} flex={1} variant='h4' fontWeight='bold'>
          Campaign Analysis
        </Typography>
        <Box mr={5}>
          <UniversalSelectBox
            label={selectedAspect}
            options={['Timeline', 'Manage Campaigns']}
            selectedValue={selectedAspect}
            onChange={handleAspectChange}
            IconComponent={<PeopleOutlinedIcon />} // Section-specific icon
          />
        </Box>
      </Box>

      {/* Conditional Rendering Based on Selection */}
      <Box height='600px'>
        {selectedAspect === 'Timeline' && <TimelineChart />}
        {selectedAspect === 'Manage Campaigns' && <KanbanBoard />}
      </Box>
    </Box>
  )
}

export default CampaignAnalysis
