import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Home,
  Settings,
  AccountBox,
  Storefront,
  Person,
  DarkMode,
} from "@mui/icons-material";

import GroupIcon from "@mui/icons-material/Group";
import ArticleIcon from "@mui/icons-material/Article";

const Sidebar = ({ mode, setMode }) => {
  return (
    <>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position={"fixed"}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#homepage">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>

                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>

                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>

                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#homepage">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>

                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#homepage">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>

                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#homepage">
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>

                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#homepage">
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>

                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#homepage">
                <ListItemIcon>
                  <DarkMode />
                </ListItemIcon>
                <Switch
                  onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
