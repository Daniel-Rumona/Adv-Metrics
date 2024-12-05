import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'

interface StatBoxProps {
  value: string // Renamed from 'title' to 'value' (e.g., metric value)
  subtitle: string // Subtitle or additional description
  icon: React.ReactNode // Icon element (e.g., Material-UI Icon)
  progress: number // Progress value between 0 and 1 (for ProgressCircle)
  increase: string // Increase percentage or value as a string
}

const StatBox: React.FC<StatBoxProps> = ({
  value,
  subtitle,
  icon,
  progress,
  increase
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box width='100%' m='0 30px'>
      {/* Header Section */}
      <Box display='flex' alignItems='center'>
        {/* Icon and Subtitle */}
        <Box display='flex' alignItems='center' gap='8px'>
          {icon}
          <Typography variant='h6' ml={5}>
            {subtitle}
          </Typography>
        </Box>
      </Box>

      {/* Value and Increase Section */}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mt='20px'
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          sx={{ color: colors.grey[400] }}
        >
          {value}
        </Typography>
        <Typography
          variant='h5'
          fontStyle='italic'
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox
