/** @format */

import * as React from "react";
import { createContext, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import DataUsageSharpIcon from "@mui/icons-material/DataUsageSharp";
import { getLoggedUser } from "@/ContextApi/GetLoggedUser";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import { Avatar, CssBaseline } from "@mui/material";
import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import Chats from "../Atoms/Chats";
import Setting from "./Setting";
import ChatSearch from "./ChatSearch";
import { MyContext } from "@/ContextApi/MyContextProvider";
const ChatListBar = () => {
  const { user } = useContext(getLoggedUser);

  const { setShowUser, setshowsettings } = useContext(MyContext);

  const toggleBoxVisibility = () => {
    setshowsettings(true);
  };
  const toggleUsers = () => {
    setShowUser(true);
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
          position='static'
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
            <Box sx={{ marginLeft: "10px" }}>
              <label
                htmlFor='avatar-input'
                sx={{
                  bgcolor: "red",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "red",
                  width: "100%",
                }}
              >
                <Avatar
                  src={user?.proImgLink}
                  alt='userProImg'
                  sx={{ width: 50, height: 50 }}
                />
              </label>
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
                onClick={toggleUsers}
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
