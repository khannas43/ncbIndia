import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

interface NavItem {
  to: string
  label: string
  roles?: string[]
}

const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard', roles: ['admin', 'manager'] },
  { to: '/data-entry', label: 'Data Entry', roles: ['user', 'admin'] },
  { to: '/analytics', label: 'Analytics', roles: ['admin', 'analyst'] },
  { to: '/reports', label: 'Reports', roles: ['admin', 'analyst'] },
  { to: '/archive', label: 'Archive', roles: ['admin'] },
  { to: '/settings', label: 'Settings', roles: ['admin'] },
]

export default function Sidebar() {
  const { user } = useAuth()
  const userRoles = (user as { roles?: string[] } | null)?.roles
  const roles: string[] = Array.isArray(userRoles) ? userRoles : []

  const links = navItems.filter(
    (item) => !item.roles || item.roles.some((r) => roles.includes(r)),
  )

  return (
    <Drawer variant="permanent">
      <Toolbar />
      <List>
        {links.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton component={Link} to={item.to}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
