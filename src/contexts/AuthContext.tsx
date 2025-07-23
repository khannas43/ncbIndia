/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { AUTH_BASE_URL, handleRedirectCallback, login, logout } from '../services/authService'

interface AuthContextValue {
  user: unknown | null
  isAuthenticated: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<unknown | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    ;(async () => {
      await handleRedirectCallback()
      try {
        const res = await fetch(`${AUTH_BASE_URL}/userinfo`, {
          credentials: 'include',
        })
        if (res.ok) {
          setUser(await res.json())
          setIsAuthenticated(true)
        }
      } catch {
        // ignore errors
      }
    })()
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}

export default AuthContext
