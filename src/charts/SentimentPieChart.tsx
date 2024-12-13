import { ResponsivePie } from '@nivo/pie'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import mockData from '../data/mockData'
import React from 'react'

interface SentimentPieChartProps {
  isDashboard?: boolean
}

const SentimentPieChart: React.FC<SentimentPieChartProps> = ({
  isDashboard = false
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const data = mockData.sentimentAnalysis.sentimentDistribution.map(
    ({ sentiment, count }) => ({
      id: sentiment,
      label: sentiment,
      value: count
    })
  )

  // Define custom colors for the sentiments
  const sentimentColorMap: { [key: string]: string } = {
    Positive: 'green',
    Negative: 'red',
    Neutral: '#868dfb'
  }

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          ticks: { text: { fill: colors.primary[900] } },
          legend: { text: { fill: colors.primary[100] } }
        },
        legends: {
          text: {
            fill: colors.primary[900] // Legend text color
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
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={({ id }) => sentimentColorMap[id as string] || 'gray'} // Use custom colors
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      //   arcLabelsTextColor={e =>
      //     sentimentColorMap[e.id as string] || colors.grey[100]
      //   } // Text color for segment labels
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.primary[100]} // Color of labels pointing to segments
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={colors.primary[900]} // Text inside the chart segments
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

export default SentimentPieChart
