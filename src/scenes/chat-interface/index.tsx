import React, { useState, useEffect } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  useTheme,
  CircularProgress
} from '@mui/material'
import { tokens } from '../../theme'
import axios from 'axios'

const ChatInterface: React.FC = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // State for chat messages and user input
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    () => {
      // Load messages from local storage if available
      const savedMessages = localStorage.getItem('chatMessages')
      return savedMessages ? JSON.parse(savedMessages) : []
    }
  )
  const [input, setInput] = useState('')
  const [isBotTyping, setIsBotTyping] = useState(false) // Typing indicator

  // Azure OpenAI details
  const azureOpenAIEndpoint =
    'https://azureopenai4digitalanalytics.openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2024-08-01-preview'
  const apiKey =
    '697VY3Dwt5nCOerCnnEBeh7gJ5o5WjWFUbP0bDbM6DThncGw6agmJQQJ99AKACfhMk5XJ3w3AAABACOGoniQ' // Replace with your Azure API key

  // Save messages to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages))
  }, [messages])

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user's message to the chat
    setMessages(prevMessages => [
      ...prevMessages,
      { text: input, isUser: true }
    ])
    const userMessage = input // Save the input message before clearing
    setInput('')

    // Typing animation starts
    setIsBotTyping(true)

    // Prepare the request body for Azure OpenAI
    const requestBody = {
      messages: [{ role: 'user', content: userMessage }],
      max_tokens: 150,
      temperature: 0.7,
      top_p: 0.95
    }

    try {
      // Make a POST request to the Azure OpenAI endpoint
      const response = await axios.post(azureOpenAIEndpoint, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey
        }
      })

      // Get the bot's response from Azure OpenAI
      const botResponse =
        response.data.choices[0].message.content || 'No response'

      // Add the bot's response to the chat
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botResponse, isUser: false }
      ])
    } catch (error) {
      console.error('Error fetching response from Azure OpenAI:', error)

      // Add an error message to the chat
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Error fetching response from Azure OpenAI.', isUser: false }
      ])
    } finally {
      setIsBotTyping(false) // Stop typing animation
    }
  }

  // Handle Enter key submission
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
      {/* Chat Display */}
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

          {/* Typing Animation */}
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
          onKeyDown={handleKeyPress} // Handle Enter key submission
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
