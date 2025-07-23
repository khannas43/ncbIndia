import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
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
  const roles: string[] = Array.isArray((user as any)?.roles)
    ? (user as any).roles
    : []

  const links = navItems.filter(
    (item) => !item.roles || item.roles.some((r) => roles.includes(r)),
  )

  return (
    <Drawer variant="permanent">
      <Toolbar />
      <List>
        {links.map((item) => (
          <ListItem button key={item.to} component={Link} to={item.to}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
