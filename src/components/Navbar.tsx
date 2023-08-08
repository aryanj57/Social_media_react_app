import { useState } from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  width: "40%",
  borderRadius: "5px",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Nexus
          </Typography>
          <WavingHandIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="Search..." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar
              onClick={() => setOpen(true)}
              sx={{ width: 30, height: 30 }}
              src="https://www.https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.com/photo/man-wearing-blue-crew-neck-t-shirt-2379005/"
            ></Avatar>
          </Icons>

          <UserBox onClick={() => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://www.https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.com/photo/man-wearing-blue-crew-neck-t-shirt-2379005/"
            ></Avatar>

            <Typography>John</Typography>
          </UserBox>
        </StyledToolbar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>My account</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
