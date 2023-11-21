import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import DataUsageSharpIcon from "@mui/icons-material/DataUsageSharp";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { ThemeProvider, createTheme } from "@mui/icons-material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { purple } from "@mui/material/colors";
import ChatSearch from "./ChatSearch";
import Chats from "../Atoms/Chats";
import Setting from "./Setting";
import { CssBaseline } from "@mui/material";

const ChatListBar = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <CssBaseline />
      {isBoxVisible && (
        <Box
          sx={{
            position: "absolute",
            left: "371px",
            top: "50px",
            backgroundColor: "#202c33",
            padding: "10px 10px",
          }}
        >
          <Setting />
        </Box>
      )}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#111b21",
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#202c33",
            height: "47px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0",
              justifyItems: "center",
            }}
          >
            <Box
              className="profile-icon"
              sx={{
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccountCircleIcon
                sx={{
                  width: "37px",
                  height: "37px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                // backgroundColor: "pink",
                width: "100%",
                height: "100%",
                padding: "23px 10px",
                justifyContent: "end",
              }}
            >
              <GroupSharpIcon sx={{ margin: "0 10px", color: "#aebac1" }} />
              <DataUsageSharpIcon sx={{ margin: "0 10px", color: "#aebac1" }} />
              <SmsRoundedIcon sx={{ margin: "0 10px", color: "#aebac1" }} />
              <AddCommentRoundedIcon
                sx={{ margin: "0 10px", color: "#aebac1" }}
              />
              <MoreVertRoundedIcon
                onClick={toggleBoxVisibility}
                sx={{ margin: "0 10px", color: "#aebac1" }}
              />
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            height: "35px",
          }}
        >
          <ChatSearch />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxHeight: "86vh",
            overflowY: "scroll",
            scrollbarWidth: "thin",
            scrollbarColor: "#bdbdbd #f5f5f5",
            "&:hover": {
              opacity: 1,
            },
            "&::-webkit-scrollbar": {
              width: "3px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#aebac1",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#aebac1",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#202c33",
            },
          }}
        >
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
        </Box>
      </Box>
    </>
  );
};

export default ChatListBar;
