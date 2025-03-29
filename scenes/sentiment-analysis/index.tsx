import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import SentimentPieChart from '../../charts/SentimentPieChart'
import UniversalSelectBox from '../../components/UniversalSelectBox'
// import SentimentAnalysisGrid from '../../components/SentimentAnalysisGrid'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined' // Section-specific icon
import { SelectChangeEvent } from '@mui/material' // Import SelectChangeEvent
const SentimentAnalysis: React.FC = () => {
  type Aspect = 'Visual' | 'Grid' // Define available aspects

  const [selectedAspect, setSelectedAspect] = useState<Aspect>('Visual')

  const handleAspectChange = (event: SelectChangeEvent<string>) => {
    setSelectedAspect(event.target.value as Aspect) // Cast to Aspect type
  }
  return (
    <Box ml={'10px'}>
      <Box display='flex' mb={2}>
        <Typography variant='h4' fontWeight='bold' gutterBottom>
          Sentiment Analysis
        </Typography>
        {/* <Box mr={5}>
          <UniversalSelectBox
            label={selectedAspect}
            options={['Visual', 'Grid']}
            selectedValue={selectedAspect}
            onChange={handleAspectChange}
            IconComponent={<PublicOutlinedIcon />} // Section-specific icon
          />
        </Box> */}
      </Box>
      <Box height='400px'>
        {selectedAspect === 'Visual' && <SentimentPieChart />}
        {/* {selectedAspect === 'Grid' && <SentimentAnalysisGrid />} */}
      </Box>
    </Box>
  )
}

export default SentimentAnalysis
