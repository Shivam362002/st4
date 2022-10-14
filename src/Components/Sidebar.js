import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Box, Typography, Avatar, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueueIcon from "@mui/icons-material/Queue";
import HomeIcon from "@mui/icons-material/Home";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import "../Styles/sidebar.css";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="dashboard profile-bg-col">
      <Drawer
        PaperProps={{
          sx: { width: "200px" },
        }}
        anchor="left"
        variant="permanent"
        className="sidebar">
        <Box p={2} role="presentation" className="side-head profile-bg-col">
          <Avatar>
            <PersonIcon />
          </Avatar>
          <Typography variant="h6" component="div" className="profile-bg-col">
            DEVIL's Dashboard
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItemButton onClick={() => navigate("/dashboard")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/allstudent")}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="All Student" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/addstudent")}>
            <ListItemIcon>
              <QueueIcon />
            </ListItemIcon>
            <ListItemText primary="Add Student" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;
