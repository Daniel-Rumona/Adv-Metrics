import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import StatBox from '../../charts/StatsBox'
import TrendingLineChart from '../../charts/TrendingLineChart'
import EngagementBarChart from '../../charts/EngagementBarChart'
import GeographicalView from '../../charts/GeographicalView'
import mockData from '../../data/mockData'
import CampaignCard from '../../components/CampaignCard'
import { ThemeProvider } from '@mui/material/styles'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'

const Dashboard: React.FC = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const campaignActivity = mockData.mockCampaignActivity
  const summaryMetrics = mockData.dashboard.summaryMetrics

  const metricIcons: Record<string, React.ReactNode> = {
    'Advertising Value Equivalent': (
      <PointOfSaleIcon
        sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
      />
    ),
    'Active Users': (
      <PersonAddIcon
        sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
      />
    ),
    'Engagement Rate': (
      <TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />
    ),
    'Reputation Index': (
      <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />
    )
  }

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC'
          }
        }
      }}
    >
      <Box m='20px'>
        {/* GRID & CHARTS */}
        <Box
          display='grid'
          gridTemplateColumns='repeat(12, 1fr)'
          gridAutoRows='140px'
          gap='20px'
        >
          {/* ROW 1 */}
          {summaryMetrics.map((metric, index) => (
            <Box
              key={metric.metric}
              sx={{
                gridColumn: 'span 3',
                backgroundColor: colors.primary[400],
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <StatBox
                value={metric.value.toString()}
                subtitle={metric.metric}
                progress={index / summaryMetrics.length} // Example progress calculation
                increase={`+${(Math.random() * 10).toFixed(1)}%`} // Example increase value
                icon={metricIcons[metric.metric] || null}
              />
            </Box>
          ))}

          {/* ROW 2 */}
          <Box
            sx={{
              gridColumn: 'span 8',
              gridRow: 'span 2',
              backgroundColor: colors.primary[400],
              borderRadius: 5
            }}
          >
            <Box
              mt='25px'
              p='0 30px'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography
                variant='h5'
                fontWeight='600'
                color={colors.grey[100]}
              >
                Engagement Overview
              </Typography>
            </Box>
            <Box height='250px' m='-20px 0 0 0'>
              <EngagementBarChart
                isDashboard={true}
                data={mockData.engagementMetrics.engagementRateOverTime.slice(
                  -15
                )} // Example: last 15 days
                selectedMetric='Engagement Rate' // Provide the selected metric
              />
            </Box>
          </Box>

          <Box
            sx={{
              gridColumn: 'span 4',
              gridRow: 'span 2',
              backgroundColor: colors.primary[400],
              overflow: 'auto',
              borderRadius: 5,
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
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'
            >
              <Typography
                color={colors.grey[100]}
                variant='h5'
                fontWeight='600'
              >
                Campaign Activities
              </Typography>
            </Box>
            {campaignActivity.map((campaign, i) => (
              <Box
                key={`${campaign.id}-${i}`}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                borderBottom={`4px solid ${colors.primary[500]}`}
                p='15px'
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant='h5'
                    fontWeight='600'
                  >
                    {campaign.title}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    Status: {campaign.status}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{campaign.lastUpdated}</Box>
              </Box>
            ))}
          </Box>

          {/* ROW 3 */}
          <Box
            sx={{
              gridColumn: 'span 6',
              gridRow: 'span 2',
              backgroundColor: colors.primary[400],
              p: '30px',
              borderRadius: 5
            }}
          >
            <Typography variant='h5' fontWeight='600'>
              Geographical Traffic
            </Typography>
            <Box height='200px' mt='20px'>
              <GeographicalView isDashboard />
            </Box>
          </Box>
          <Box
            sx={{
              gridColumn: 'span 6',
              gridRow: 'span 2',
              backgroundColor: colors.primary[400],
              p: '30px',
              borderRadius: 5
            }}
          >
            <Typography variant='h5' fontWeight='600'>
              Trending Topics
            </Typography>
            <Box>
              <Box height='200px' mt='20px'>
                <TrendingLineChart
                  data={mockData.trendingTopics.popularityTrend
                    .map(topic =>
                      topic.dataPoints.map(dataPoint => ({
                        topic: topic.topic,
                        date: dataPoint.date,
                        value: dataPoint.value
                      }))
                    )
                    .flat()}
                  isDashboard
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Dashboard
