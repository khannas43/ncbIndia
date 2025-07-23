import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material'
import useAuth from '../hooks/useAuth'

export default function LoginPage() {
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await login()
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, m: 'auto', mt: 8 }}
    >
      <Typography variant="h5" align="center">
        Login
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        autoComplete="username"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <Button type="submit" variant="contained" disabled={loading}>
        Login
      </Button>
      {loading && <CircularProgress sx={{ alignSelf: 'center' }} />}
    </Box>
  )
}
