import React, { useState } from 'react'
import { Box, ButtonGroup, Button, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { SelectChangeEvent } from '@mui/material'
import UniversalSelectBox from '../../components/UniversalSelectBox'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import EngagementBarChart from '../../charts/EngagementBarChart'
import mockData from '../../data/mockData'

const EngagementMetrics: React.FC = () => {
  type Metric = 'Engagement Rate' | 'Content Type Engagement'

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [selectedMetric, setSelectedMetric] =
    useState<Metric>('Engagement Rate')
  const [timeframe, setTimeframe] = useState<'Daily' | 'Weekly' | 'Monthly'>(
    'Daily'
  )

  const handleMetricChange = (event: SelectChangeEvent<string>) => {
    setSelectedMetric(event.target.value as Metric)
  }

  const handleTimeframeChange = (timeframe: 'Daily' | 'Weekly' | 'Monthly') => {
    setTimeframe(timeframe)
  }

  const filteredData = () => {
    const today = new Date()
    if (selectedMetric === 'Engagement Rate') {
      const data = mockData.engagementMetrics.engagementRateOverTime
      if (timeframe === 'Daily') {
        return data.slice(-15)
      } else if (timeframe === 'Weekly') {
        return data.slice(-20).map((item, index) => ({
          date: `Week ${index + 1}`,
          engagementRate: item.engagementRate
        }))
      } else if (timeframe === 'Monthly') {
        return data.slice(-12).map((item, index) => ({
          date: `Month ${index + 1}`,
          engagementRate: item.engagementRate
        }))
      }
    } else if (selectedMetric === 'Content Type Engagement') {
      return mockData.engagementMetrics.contentTypeEngagement
    }
    return []
  }

  return (
    <Box>
      {/* Header Section */}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={2}
      >
        {/* Left: Heading */}
        <Typography ml={2} variant='h4' fontWeight='bold'>
          Engagement Metrics
        </Typography>

        {/* Center: Button Group */}
        <Box mx={2}>
          <ButtonGroup
            sx={{
              '& .MuiButton-root': {
                color: colors.primary[100],
                backgroundColor: colors.primary[700],
                border: `1px solid ${colors.primary[600]}`,
                '&:hover': {
                  backgroundColor: colors.blueAccent[600]
                }
              },
              '& .MuiButton-contained': {
                backgroundColor: colors.primary[400],
                color: colors.primary[200],
                '&:hover': {
                  backgroundColor: colors.primary[400]
                }
              }
            }}
          >
            <Button
              variant={timeframe === 'Daily' ? 'contained' : 'outlined'}
              onClick={() => handleTimeframeChange('Daily')}
            >
              Daily
            </Button>
            <Button
              variant={timeframe === 'Weekly' ? 'contained' : 'outlined'}
              onClick={() => handleTimeframeChange('Weekly')}
            >
              Weekly
            </Button>
            <Button
              variant={timeframe === 'Monthly' ? 'contained' : 'outlined'}
              onClick={() => handleTimeframeChange('Monthly')}
            >
              Monthly
            </Button>
          </ButtonGroup>
        </Box>

        {/* Right: Select Box */}
        <Box mr={2}>
          <UniversalSelectBox
            label={selectedMetric}
            options={['Engagement Rate', 'Content Type Engagement']}
            selectedValue={selectedMetric}
            onChange={handleMetricChange}
            IconComponent={<PeopleOutlinedIcon />}
          />
        </Box>
      </Box>

      {/* Chart Section */}
      <Box height='500px'>
        <EngagementBarChart
          data={filteredData()}
          selectedMetric={selectedMetric}
        />
      </Box>
    </Box>
  )
}

export default EngagementMetrics
