import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Box,
  Typography,
  useTheme
} from '@mui/material'
import { tokens } from '../theme'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PeopleIcon from '@mui/icons-material/People'

const platformIcons: Record<string, React.ReactNode> = {
  Twitter: <TwitterIcon />,
  Facebook: <FacebookIcon />,
  Instagram: <InstagramIcon />,
  LinkedIn: <LinkedInIcon />
}

interface PostCardProps {
  post: {
    platform: string
    title: string
    date: string
    description: string
    image: string
    likes: number
    interactions: number
  }
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Card
      sx={{
        backgroundColor: colors.primary[400],
        color: colors.grey[100],
        borderRadius: 5
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: colors.primary[400],
              color: colors.primary[100],
              border: `2px solid ${colors.primary[100]}`
            }}
          >
            {platformIcons[post.platform]}
          </Avatar>
        }
        title={post.title}
        subheader={post.date}
        sx={{ color: colors.grey[100] }}
      />
      <CardMedia
        component='img'
        image={post.image}
        alt={post.title}
        sx={{
          borderRadius: '5px',
          height: 'auto',
          maxHeight: '200px',
          objectFit: 'cover'
        }}
      />
      <CardContent>
        <Typography variant='body2' sx={{ color: colors.grey[300] }}>
          {post.description}
        </Typography>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mt={2}
        >
          <Box display='flex' alignItems='center'>
            <FavoriteIcon sx={{ color: colors.primary[100], marginRight: 1 }} />
            <Typography variant='body1'>{post.likes}</Typography>
          </Box>
          <Box display='flex' alignItems='center'>
            <PeopleIcon sx={{ color: colors.primary[100], marginRight: 1 }} />
            <Typography variant='body1'>{post.interactions}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PostCard
