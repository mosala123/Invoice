import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications'; // استيراد أيقونة الإشعارات
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // استيراد أيقونة الحساب
import LoginFreelancer from '../user/LoginFreelancer';
import RegisterFreelancer from '../user/RegisterFreelancer';
import Invoice from '../electronic-invoice/Invoice';
import RegisterCustomer from '../user/RegisterCustomer';
import LoginCustomer from '../user/LoginCustomer';
import Home from '../Home';
import InvoicesAll from '../electronic-invoice/InvoicesAll';
import Profile from '../Profile';
import Reports from '../Reports';
import Settings from '../Settings';
import Logouts from '../Logouts';
import Countdown from '../Countdown';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

export default function InvoiceDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigation = (route) => {
    if (route === 'home') {
      navigate('/home');
    } else if (route === 'clients') {
      navigate('/profile');
    }
    else if (route === 'reports') {
      navigate('/reports');
    }
    else if (route === 'settings') {
      navigate('/settings');
    }
    else if (route === 'logout') {
      navigate('/logout');
    }
    else if (route === 'create-invoice') {
      navigate('/invoice');
    }
    else if (route === 'invoices') {
      navigate('/invoicesAll');
    }
    else if (route === 'settings') {
      navigate('/settings');
    } else if (route === 'logout') {
      navigate('/logout');
    } else {
      navigate(`/${route}`);
    }
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          {/* AutoInvoice Text */}
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            AutoInvoice
          </Typography>

          {/* Notification Icon at the far right */}
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>


          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {[
            { text: 'Home', icon: <HomeIcon />, route: 'home' },
            { text: 'Create Invoice', icon: <AddIcon />, route: 'create-invoice' },
            { text: 'Invoices', icon: <DescriptionIcon />, route: 'invoices' },
            { text: 'Clients', icon: <GroupIcon />, route: 'clients' },
            { text: 'Reports', icon: <AssessmentIcon />, route: 'reports' },
            { text: 'Settings', icon: <SettingsIcon />, route: 'settings' },
          ].map(({ text, icon, route }) => (
            <ListItem button key={text} onClick={() => handleNavigation(route)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => handleNavigation('logout')}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* محتوى الصفحات */}

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Countdown /> } /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logouts />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/invoicesAll" element={<InvoicesAll />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logincustomer" element={<LoginCustomer />} />
          <Route path="/registercustomer" element={<RegisterCustomer />} />
          <Route path="/loginfreelancer" element={<LoginFreelancer />} />
          <Route path="/registerfreelancer" element={<RegisterFreelancer />} />
        </Routes>
      </Box>
    </Box>
  );
}
