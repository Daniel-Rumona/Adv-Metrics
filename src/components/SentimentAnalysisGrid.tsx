// import React from 'react'
// import { DataGrid, GridColDef } from '@mui/x-data-grid'
// import { Box, Chip } from '@mui/material'

// const sentimentData = [
//   {
//     id: 1,
//     platform: 'Twitter',
//     post: 'Had a great experience!',
//     views: 1200,
//     sentiment: 'Positive'
//   },
//   {
//     id: 2,
//     platform: 'Facebook',
//     post: 'Service was okay, could be better.',
//     views: 890,
//     sentiment: 'Neutral'
//   },
//   {
//     id: 3,
//     platform: 'Instagram',
//     post: 'The product launch was amazing!',
//     views: 4500,
//     sentiment: 'Positive'
//   },
//   {
//     id: 4,
//     platform: 'LinkedIn',
//     post: 'Struggled with onboarding.',
//     views: 200,
//     sentiment: 'Negative'
//   }
// ]

// // Custom render function for Sentiment column
// const renderSentiment = (params: any) => {
//   let chipColor: 'success' | 'warning' | 'error' | 'default' = 'default'

//   switch (params.value) {
//     case 'Positive':
//       chipColor = 'success'
//       break
//     case 'Neutral':
//       chipColor = 'warning'
//       break
//     case 'Negative':
//       chipColor = 'error'
//       break
//     default:
//       chipColor = 'default'
//   }

//   return <Chip label={params.value} color={chipColor} />
// }

// // Define columns
// const columns: GridColDef[] = [
//   { field: 'platform', headerName: 'Platform', width: 150 },
//   { field: 'post', headerName: 'Post', width: 300 },
//   { field: 'views', headerName: 'Views', type: 'number', width: 100 },
//   {
//     field: 'sentiment',
//     headerName: 'Sentiment',
//     width: 150,
//     renderCell: renderSentiment
//   }
// ]

// const SentimentAnalysisGrid = () => {
//   return (
//     <Box
//       sx={{
//         height: 400,
//         width: '100%',
//         padding: '1rem',
//         backgroundColor: 'white'
//       }}
//     >
//       <h2 style={{ marginBottom: '1rem' }}>Sentiment Analysis</h2>
//       <DataGrid
//         rows={sentimentData}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//       />
//     </Box>
//   )
// }

// export default SentimentAnalysisGrid
