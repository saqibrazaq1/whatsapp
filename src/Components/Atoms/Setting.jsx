import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Icon,
  IconButton,
} from "@mui/material";
import React from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { useContext } from "react";
import { MyContext } from "@/ContextApi/MyContextProvider";

const Setting = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { setshowsettings } = useContext(MyContext);
  const openSettings = () => {
    setshowsettings(true);
  };

  // const handleOpen = () => {
  //   setshowsettings("Hello");
  //   // console.log("hello");
  // };
  return (
    <>
      <IconButton
        sx={{ width: "0", color: "#aebac1" }}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertRoundedIcon sx={{ width: "23px", height: "23px" }} />
      </IconButton>

      <Menu
        sx={{
          top: "25px",
          left: "-120px",
          margin: "0 10px",
          color: "#aebac1",
          cursor: "pointer",
        }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>New Group</MenuItem>
        <MenuItem>New Community</MenuItem>
        <MenuItem>Starred Messages</MenuItem>
        <MenuItem>Select chats</MenuItem>
        <MenuItem onClick={openSettings}>Settings</MenuItem>
        <MenuItem>Log Out</MenuItem>
      </Menu>
    </>
  );
};

export default Setting;
