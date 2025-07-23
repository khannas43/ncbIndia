import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import ThemeProvider from './components/ThemeProvider'
import { store } from './store'

export default function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}
