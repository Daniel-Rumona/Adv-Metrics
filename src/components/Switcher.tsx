import React, { useState } from 'react'
import { tokens } from '../theme'
import {
  Box,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
  useTheme
} from '@mui/material'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import DomainIcon from '@mui/icons-material/Domain'
const Switcher = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [selectedCompany, setSelectedCompany] = useState('Adv Metrics')

  const handleCompanyChange = (event: SelectChangeEvent<string>) => {
    setSelectedCompany(event.target.value)
  }

  return (
    <Box
      display='flex'
      alignItems='center'
      gap={1} // Adjust spacing between elements
      p={1}
      borderRadius={2.5} // Smaller border radius
      border='1px solid'
      borderColor={colors.primary[400]}
      sx={{
        backgroundColor: 'background.default',
        width: 'fit-content',
        height: '40px' // Reduced height
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1976d2', // Example blue background
          color: 'white',
          borderRadius: '50%',
          height: '32px', // Smaller height for the icon
          width: '32px' // Square icon container
        }}
      >
        <DomainIcon fontSize='small' />
      </Box>
      <Box>
        <Typography
          variant='body2'
          sx={{ fontSize: '14px', fontWeight: 'bold', lineHeight: 1 }}
        >
          {selectedCompany}
        </Typography>
      </Box>
      <Select
        value='' //{selectedCompany}
        onChange={handleCompanyChange}
        disableUnderline // Removes underline
        IconComponent={SwapVertIcon} // Custom dropdown indicator
        sx={{
          minWidth: '36px', // Compact width
          padding: 0,
          '& .MuiSelect-select': {
            padding: 0, // Removed padding
            display: 'flex',
            alignItems: 'center'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none' // Removes the border
          },
          '& .MuiSelect-icon': {
            marginRight: '2px'
          }
        }}
      >
        <MenuItem value='Adv Metrics'>Adv Metrics</MenuItem>
        <MenuItem value='QuantX'>QuantX</MenuItem>
        <MenuItem value='smeGo'>smeGo</MenuItem>
      </Select>
    </Box>
  )
}

export default Switcher
