import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsTimeline from 'highcharts/modules/timeline'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../theme'
import mockData from '../data/mockData' // Adjust the path as per your folder structure

// Initialize the Highcharts Timeline module
HighchartsTimeline(Highcharts)

// Define the type for timeline data points
interface TimelineDataPoint {
  x: number // Timestamp
  name: string // Campaign name
  label: string // Status label
  description: string // Description text
}

const TimelineChart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // Explicitly type the timelineData state
  const [timelineData, setTimelineData] = useState<TimelineDataPoint[]>([])

  useEffect(() => {
    // Map mock data to Highcharts-compatible timeline format
    const mappedData: TimelineDataPoint[] = mockData.mockCampaignActivity.map(
      campaign => ({
        x: new Date(campaign.lastUpdated).getTime(), // Convert date to timestamp
        name: campaign.title, // Campaign title
        label: campaign.status, // Campaign status
        description: `${campaign.description}` // Description
      })
    )
    setTimelineData(mappedData)
  }, [])

  const chartOptions = {
    chart: {
      zooming: {
        type: 'x'
      },
      type: 'timeline',
      height: '600px',
      backgroundColor: 'transparent' // Set the background color here
    },
    yAxis: {
      gridLineWidth: 1,
      title: null,
      labels: {
        enabled: false
      }
    },
    legend: {
      enabled: false
    },
    title: {
      text: 'Campaign Activity Timeline',
      style: {
        color: colors.grey[100], // Change the title color
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    credits: {
      enabled: false // Disable the Highcharts.com label
    },
    xAxis: {
      type: 'datetime',
      labels: {
        style: {
          color: colors.grey[100], // Change x-axis label color
          fontSize: '12px'
        }
      }
    },
    series: [
      {
        dataLabels: {
          allowOverlap: false,
          format:
            '<span style="color:{point.color}">● </span><span ' +
            'style="font-weight: bold;" > ' +
            '{point.x:%d %b %Y}</span><br/>{point.name}'
        },
        marker: {
          symbol: 'circle'
        },
        data: timelineData // Dynamically fetched timeline data
      }
    ]
  }

  return (
    <Box sx={{ ml: '15px', height: '500px', width: '95%' }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Box>
  )
}

export default TimelineChart
