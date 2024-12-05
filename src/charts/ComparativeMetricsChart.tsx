import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveLine } from '@nivo/line'
import mockData from '../data/mockData'

interface ComparativeMetricsChartProps {
  selectedMetric: 'Share of Voice' | 'Customer Reach' | 'Engagement Rate' // Dynamic metrics
}

const ComparativeMetricsChart: React.FC<ComparativeMetricsChartProps> = ({
  selectedMetric
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  // State for active segments (all segments initially active)
  const [activeSegments, setActiveSegments] = useState<string[]>(
    mockData.comparativeMetrics.shareOfVoice.map(({ company }) => company)
  )

  // Render Chart Based on Metric
  const renderChart = () => {
    if (selectedMetric === 'Share of Voice') {
      const data = mockData.comparativeMetrics.shareOfVoice.map(
        ({ company, value }) => ({
          id: company,
          label: company,
          value
        })
      )

      if (!data.length) {
        return (
          <Typography color={colors.grey[100]}>
            No data available for Share of Voice
          </Typography>
        )
      }
      return (
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.8}
          cornerRadius={3}
          arcLinkLabelsTextColor={colors.primary[100]} // Color of labels pointing to segments
          arcLabelsTextColor={colors.primary[600]} // Text inside the chart segments
          colors={{ scheme: 'category10' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          theme={{
            axis: {
              ticks: { text: { fill: colors.grey[100] } }
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
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: colors.grey[100],
              symbolSize: 18,
              symbolShape: 'circle'
            }
          ]}
        />
      )
    }

    if (selectedMetric === 'Customer Reach') {
      const data = [
        {
          id: 'QuantX',
          data: mockData.comparativeMetrics.customerReach
            .filter(d => d.company === 'QuantX')
            .map(d => ({ x: d.date, y: d.value }))
        },
        {
          id: 'smeGO',
          data: mockData.comparativeMetrics.customerReach
            .filter(d => d.company === 'smeGO')
            .map(d => ({ x: d.date, y: d.value }))
        },
        {
          id: 'Meltwater',
          data: mockData.comparativeMetrics.customerReach
            .filter(d => d.company === 'Meltwater')
            .map(d => ({ x: d.date, y: d.value }))
        }
      ]

      if (!data.length) {
        return (
          <Typography color={colors.grey[100]}>
            No data available for Customer Reach
          </Typography>
        )
      }

      return (
        <ResponsiveLine
          data={data}
          curve='monotoneX'
          theme={{
            axis: {
              domain: { line: { stroke: colors.grey[100] } },
              ticks: { text: { fill: colors.grey[100] } },
              legend: { text: { fill: colors.grey[100] } }
            },
            legends: { text: { fill: colors.grey[100] } },
            tooltip: {
              container: {
                background: colors.primary[400],
                color: colors.grey[100],
                fontSize: '14px',
                borderRadius: '4px',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)'
              }
            }
          }}
          margin={{ top: 50, right: 110, bottom: 70, left: 60 }} // Increase bottom margin
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            legend: 'Date',
            legendPosition: 'middle',
            legendOffset: 60 // Move legend farther from the axis
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            legend: 'Customer Reach',
            legendPosition: 'middle',
            legendOffset: -50
          }}
          colors={{ scheme: 'category10' }}
          legends={[
            {
              anchor: 'top',
              direction: 'row',
              justify: false,
              translateX: 1,
              translateY: -30,
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              itemsSpacing: 100,
              symbolSize: 10,
              symbolShape: 'circle',
              padding: 10,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          useMesh={true}
          enableGridX={false}
          enableSlices='x'
        />
      )
    }

    if (selectedMetric === 'Engagement Rate') {
      const data = mockData.comparativeMetrics.engagementRate

      if (!data.length) {
        return (
          <Typography color={colors.grey[100]}>
            No data available for Engagement Rate
          </Typography>
        )
      }

      return (
        <ResponsiveBar
          data={data}
          keys={['engagement']}
          indexBy='company'
          margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
          padding={0.8}
          borderRadius={25}
          colors={colors.blueAccent[500]}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            legend: 'Company',
            legendPosition: 'middle',
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            legend: 'Engagement Rate (%)',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          theme={{
            axis: {
              ticks: { text: { fill: colors.grey[100] } }
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
        />
      )
    }

    return (
      <Typography color={colors.grey[100]}>Invalid Metric Selected</Typography>
    )
  }

  return (
    <Box height='600px' padding={4}>
      <Typography
        variant='h5'
        fontWeight='bold'
        color={colors.grey[100]}
        mb={2}
      >
        {selectedMetric}
      </Typography>
      {renderChart()}
    </Box>
  )
}

export default ComparativeMetricsChart
