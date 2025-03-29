import React, { useState } from 'react'
import { Box, Typography, Grid, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import UniversalSelectBox from '../../components/UniversalSelectBox'
import mockData from '../../data/mockData'
import { SelectChangeEvent } from '@mui/material'
import PostCard from '../../components/PostCard' // Import the PostCard component

const PostMetrics: React.FC = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [selectedPlatform, setSelectedPlatform] = useState<string>('All')

  const handlePlatformChange = (event: SelectChangeEvent<string>) => {
    setSelectedPlatform(event.target.value as string)
  }

  // Filter posts based on the selected platform
  const filteredPosts = mockData.posts.cumulativePosts.filter(post =>
    selectedPlatform === 'All' ? true : post.platform === selectedPlatform
  )

  return (
    <Box>
      {/* Header Section */}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={2}
      >
        <Typography ml={2} variant='h4' fontWeight='bold'>
          Post Metrics
        </Typography>
        <Box mr={2}>
          <UniversalSelectBox
            label='Platform'
            options={['All', 'Twitter', 'Facebook', 'Instagram', 'LinkedIn']}
            selectedValue={selectedPlatform}
            onChange={handlePlatformChange}
          />
        </Box>
      </Box>

      {/* Posts Grid */}
      <Grid container spacing={2} padding={2}>
        {filteredPosts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.date + post.platform}>
            <PostCard post={post} /> {/* Use the PostCard component */}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PostMetrics
