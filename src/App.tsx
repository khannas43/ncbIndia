import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import ThemeProvider from './components/ThemeProvider'
import { store } from './store'
import { AuthProvider } from './contexts/AuthContext'

export default function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}
