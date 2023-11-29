import * as React from "react";
import { createContext, useContext, useState } from "react";
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
import Chats from "../Atoms/Chats";
import Setting from "./Setting";
import { CssBaseline } from "@mui/material";
import { MyContext } from "@/ContextApi/MyContextProvider";
import ChatSearch from "./ChatSearch";
import index from "@/pages";

const ChatListBar = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          height: "96vh",
          flexGrow: 1,
          backgroundColor: "#111b21",
          borderRight: "1px solid rgba(255, 255, 255, 0.20)",
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#202c33",
            height: "60px",
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
                  width: "55px",
                  height: "50px",
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
              <GroupSharpIcon
                sx={{
                  margin: "0 15px",
                  color: "#aebac1",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
              />
              <DataUsageSharpIcon
                sx={{
                  margin: "0 15px",
                  color: "#aebac1",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
              />
              <SmsRoundedIcon
                sx={{
                  margin: "0 15px",
                  color: "#aebac1",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
              />
              <AddCommentRoundedIcon
                sx={{
                  margin: "0 15px",
                  color: "#aebac1",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
              />
              <Setting
                onClick={toggleBoxVisibility}
                sx={{
                  margin: "0 5px",
                  // backgroundColor: "red",
                  color: "#aebac1",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            height: "35px",
            marginBottom: "1px",
          }}
        >
          <ChatSearch />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "86vh",
            overflow: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: " #aebac1 ",
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
          }}
        >
          {[
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1,
          ].map((item, index) => (
            <Chats key={index} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ChatListBar;
