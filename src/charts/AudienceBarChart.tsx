import { ResponsiveBar } from '@nivo/bar'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import mockData from '../data/mockData'
import React from 'react'

interface AudienceBarChartProps {
  isDashboard?: boolean
  selectedMetric: 'New Users' | 'Demographics' | 'Engagement by Demographics' // Dynamic metric type
}

const AudienceBarChart: React.FC<AudienceBarChartProps> = ({
  isDashboard = false,
  selectedMetric
}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  // Data mapping for metrics
  const metricDataMap: Record<
    string,
    { keys: string[]; indexBy: string; data: any[] }
  > = {
    'New Users': {
      keys: ['newUsers'],
      indexBy: 'date',
      data: mockData.audienceAnalysis.audienceGrowth.map(
        ({ date, newUsers }) => ({
          date,
          newUsers
        })
      )
    },
    Demographics: {
      keys: ['percentage'],
      indexBy: 'category',
      data: mockData.audienceAnalysis.demographics.map(
        ({ category, percentage }) => ({
          category,
          percentage
        })
      )
    },
    'Engagement by Demographics': {
      keys: ['engagementRate'],
      indexBy: 'category',
      data: mockData.audienceAnalysis.engagementByDemographics.map(
        ({ category, engagementRate }) => ({
          category,
          engagementRate
        })
      )
    }
  }

  const { keys, indexBy, data } = metricDataMap[selectedMetric]

  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={{ top: 50, right: 50, bottom: 60, left: 60 }}
      padding={0.6}
      colors={colors.blueAccent[500]}
      axisBottom={{
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legend: isDashboard
          ? undefined
          : indexBy === 'date'
          ? 'Date'
          : 'Category',
        legendPosition: 'middle',
        legendOffset: 50
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 10,
        legend: isDashboard ? undefined : keys[0],
        legendPosition: 'middle',
        legendOffset: -50
      }}
      theme={{
        axis: {
          ticks: { text: { fill: colors.primary[100] } },
          legend: { text: { fill: colors.primary[100] } }
        },
        legends: {
          text: {
            fill: colors.primary[100]
          }
        },
        tooltip: {
          container: {
            background: colors.primary[400], // Tooltip background
            color: colors.grey[100], // Tooltip text color
            fontSize: '14px',
            borderRadius: '4px',
            boxShadow: '0px 3px 6px rgba(0,0,0,0.3)'
          }
        }
      }}
      borderRadius={10}
      legends={[
        {
          anchor: 'top',
          direction: 'column',
          translateX: 50,
          translateY: -30,
          itemWidth: 100,
          itemHeight: 20,
          symbolSize: 20,
          dataFrom: 'keys',
          symbolShape: 'circle'
        }
      ]}
      barAriaLabel={d => `${indexBy}: ${d.indexValue}, ${keys[0]}: ${d.value}`}
    />
  )
}

export default AudienceBarChart
