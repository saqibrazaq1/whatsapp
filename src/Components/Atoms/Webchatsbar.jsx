import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

const Webchatsbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#202c33",
        height: "60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
          justifyItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AccountCircleIcon
            sx={{
              width: "45px",
              height: "45px",
            }}
          />

          <Typography
            variant="h6"
            sx={{ marginLeft: "10px", cursor: "pointer" }}
          >
            User
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon
            sx={{
              color: "#aebac1",
              height: "24px",
              width: "24px",
              cursor: "pointer",
            }}
          />

          <Box>
            <IconButton
              sx={{ width: "0", color: "#aebac1", marginLeft: "15px" }}
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertRoundedIcon
                sx={{
                  color: "#aebac1",
                  height: "23px",
                  width: "23px",
                  cursor: "pointer",
                }}
              />
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
              <MenuItem onClick={handleClose}>Contact info</MenuItem>
              <MenuItem onClick={handleClose}>Select messages</MenuItem>
              <MenuItem onClick={handleClose}>Close chat</MenuItem>
              <MenuItem onClick={handleClose}>Mute notifications</MenuItem>
              <MenuItem onClick={handleClose}>Disappearing messages</MenuItem>
              <MenuItem onClick={handleClose}>Clear chat</MenuItem>
              <MenuItem onClick={handleClose}>Delete chat</MenuItem>
              <MenuItem onClick={handleClose}>Report</MenuItem>
              <MenuItem onClick={handleClose}>Block</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Webchatsbar;
