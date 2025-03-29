import React, { useState } from 'react'
import {
  Box,
  IconButton,
  Modal,
  Typography,
  Button,
  useTheme
} from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'

interface TopbarProps {
  onLogout: () => void
}

const Topbar: React.FC<TopbarProps> = ({ onLogout }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: colors.primary[400],
          borderRadius: '4px'
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <Badge badgeContent={4} color='primary'>
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleOpenModal}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby='user-modal-title'
        aria-describedby='user-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2
          }}
        >
          <Typography id='user-modal-title' variant='h6' component='h2'>
            Current User: Adv Metrics
          </Typography>
          <Button
            variant='contained'
            color='primary'
            sx={{ mt: 2 }}
            fullWidth
            onClick={() => {
              handleCloseModal()
              onLogout()
            }}
          >
            Log Out
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}

export default Topbar
