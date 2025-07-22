import { createTheme } from '@mui/material/styles'
import { amber, indigo } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: amber[500],
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
})

export default theme
