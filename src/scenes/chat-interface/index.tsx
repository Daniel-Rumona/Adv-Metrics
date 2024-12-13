import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  useTheme
} from '@mui/material'
import { tokens } from '../../theme'
import axios from 'axios'

interface Message {
  text: string
  isUser: boolean
}

const ChatInterface: React.FC = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isBotTyping, setIsBotTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    setMessages(prev => [...prev, { text: input, isUser: true }])
    const userMessage = input
    setInput('')
    setIsBotTyping(true)

    try {
      // Call the assistant API
      const response = await axios.post('/api/assistant', {
        prompt: userMessage
      })

      // Ensure the backend returns a proper messages array
      const assistantMessages = response.data.messages
      setMessages(prev => [
        ...prev,
        ...assistantMessages.map((msg: { role: string; content: string }) => ({
          text: msg.content,
          isUser: msg.role === 'user'
        }))
      ])
    } catch (error: any) {
      console.error('Error communicating with assistant:', error.message)
      setMessages(prev => [
        ...prev,
        {
          text: 'Error communicating with the assistant. Please try again.',
          isUser: false
        }
      ])
    } finally {
      setIsBotTyping(false)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        padding: '20px'
      }}
    >
      {/* Chat History */}
      <Paper
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: '10px',
          marginBottom: '20px',
          backgroundColor: colors.primary[600],
          borderRadius: '10px'
        }}
      >
        <List>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{
                justifyContent: message.isUser ? 'flex-end' : 'flex-start'
              }}
            >
              <Paper
                sx={{
                  padding: '10px',
                  backgroundColor: message.isUser
                    ? colors.greenAccent[800]
                    : colors.primary[400],
                  color: colors.primary[100],
                  borderRadius: '10px',
                  maxWidth: '60%'
                }}
              >
                <ListItemText primary={message.text} />
              </Paper>
            </ListItem>
          ))}
          {isBotTyping && (
            <ListItem
              sx={{
                justifyContent: 'flex-start'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: colors.primary[400],
                  color: colors.grey[100],
                  padding: '10px',
                  borderRadius: '10px',
                  maxWidth: '60%'
                }}
              >
                <CircularProgress
                  size={20}
                  sx={{ marginRight: '10px', color: colors.grey[100] }}
                />
                <Typography variant='body2'>Thinking...💡</Typography>
              </Box>
            </ListItem>
          )}
        </List>
      </Paper>

      {/* Input Section */}
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <TextField
          variant='outlined'
          fullWidth
          placeholder='Type a message...'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: colors.primary[400],
              color: colors.grey[100]
            },
            '& .MuiInputLabel-root': { color: colors.grey[100] },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary[700]
            }
          }}
        />
        <Button
          variant='contained'
          sx={{
            borderRadius: '15px',
            width: '50px',
            height: '35px',
            marginTop: '8px',
            backgroundColor: colors.greenAccent[200],
            color: colors.primary[400],
            '&:hover': {
              backgroundColor: colors.greenAccent[400]
            }
          }}
          onClick={handleSendMessage}
          disabled={!input.trim()}
        >
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default ChatInterface
