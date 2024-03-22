import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';


import './sidenav.css'

import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PowerIcon from '@mui/icons-material/Power';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidenav() {

    const navigate = useNavigate();

  return (
    <Box class="sidebar" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        {/* <Toolbar> */}
        
        {/* </Toolbar> */}
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List >
       
            <div class="list-head">
                <div class="head-icon">
          <SettingsIcon />
          </div>
          <ListItemText primaryTypographyProps={{
         color: 'black',
         fontWeight:900,
         paddingTop:.5,
         marginBottom:4,
         marginLeft:1,
         fontSize: 15,
        
          }} primary={"Salesway"}></ListItemText>
          </div>


            {['Settings', 'Team'].map((text, index) => (
              
              
              <ListItem key={text} disablePadding onClick={()=>{navigate("/"+text)}}>
                
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ?<SettingsIcon />:null}
                    {index === 1 ?<AccountCircleIcon />:null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Dashboard', 'Campaigns', 'Flows','Integrations','Customers'].map((text, index) => (
              <ListItem  key={text} disablePadding onClick={()=>{navigate("/"+text)}}>
                <ListItemButton  class="list" >
                  <ListItemIcon   class="list" > 
                    <div>{index === 0 ?<DashboardIcon />:null}</div>
                    {index === 1 ?<BarChartIcon />:null}
                    {index === 2 ?<AccountTreeIcon />:null}
                    {index === 3 ?<PowerIcon />:null}
                    {index === 4 ?<InboxIcon />:null}
                  </ListItemIcon>
                  <ListItemText size="sm" class="list-text"
                  primaryTypographyProps={{
                    color: 'gray',
                    fontWeight: 'medium',
                    paddingTop:0.5,
                    marginLeft:3,
                    fontSize: 14,
                    variant: 'body2',
                  }} primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      
      </Box>
    </Box>
  );
}