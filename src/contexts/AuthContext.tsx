import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { AUTH_BASE_URL, handleRedirectCallback, login, logout } from '../services/authService'

interface AuthContextValue {
  user: any | null
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
  const [user, setUser] = useState<any | null>(null)
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
