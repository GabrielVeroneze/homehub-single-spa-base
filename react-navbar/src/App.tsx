import { useState } from 'react'
import { AppBar, Badge, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import WifiIcon from '@mui/icons-material/Wifi'
import LockIcon from '@mui/icons-material/Lock'
import SettingsIcon from '@mui/icons-material/Settings'
import HomeHubLogo from './assets/home-hub.png'

const App = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const isMenuOpen = Boolean(anchorEl)

    const [open, setOpen] = useState<boolean>(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SpaceDashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Visão geral" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <WifiIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dispositivos" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LockIcon />
                        </ListItemIcon>
                        <ListItemText primary="Segurança" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Configurações" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Usuário</MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
            <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
        </Menu>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#9C27B0' }}>
                <Toolbar>
                    <Button sx={{ padding: 0 }} onClick={toggleDrawer(true)}>
                        <img
                            src={HomeHubLogo}
                            alt="Logotipo do HomeHub"
                            style={{ width: 176 }}
                        />
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <Badge color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
            {renderMenu}
        </Box>
    )
}

export default App
