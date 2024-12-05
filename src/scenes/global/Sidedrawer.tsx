import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined'
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined'
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ChatBotIcon from '@mui/icons-material/ChatBubbleOutlined'
import Switcher from '../../components/Switcher'

type ItemProps = {
  title: string
  to: string
  icon: React.ReactNode
  selected: string
  setSelected: (title: string) => void
}

const Item: React.FC<ItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100]
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const SideDrawer = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important'
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important'
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important'
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important'
        }
      }}
      style={{ height: '100vh', display: 'flex' }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            style={{
              margin: '10px 0',
              color: colors.grey[100]
            }}
          >
            {!isCollapsed ? (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='5px'
              >
                {/* Switcher Component */}
                <Switcher />

                {/* Collapse Button */}
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  sx={{
                    marginRight: '10px'
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setIsCollapsed(!isCollapsed)}
                sx={{
                  marginLeft: '1px'
                }}
              >
                <MenuOutlinedIcon />
              </IconButton>
            )}
          </MenuItem>

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title='Dashboard'
              to='/'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Audience Analysis'
              to='/audience-analysis'
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Chat Bot'
              to='/chat-interface'
              icon={<ChatBotIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Sentiment Analysis'
              to='/sentiment-analysis'
              icon={<SentimentSatisfiedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Geographical View'
              to='/geographical-view'
              icon={<PublicOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Trending Topics'
              to='/trending-topics'
              icon={<TrendingUpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Posts Metrics'
              to='/posts-metrics'
              icon={<GroupOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Engagement Metrics'
              to='/engagement-metrics'
              icon={<QueryStatsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Campaign Tracker'
              to='/campaign-analysis'
              icon={<InsightsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Comparative Analysis'
              to='/comparative-analysis'
              icon={<CompareArrowsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Reports'
              to='/reports'
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Settings'
              to='/settings'
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default SideDrawer
