/** @format */

import {
  Avatar,
  Box,
  CssBaseline,
  Typography,
  useStepContext,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container } from "postcss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useContext } from "react";
import WebChats from "./WebChats";
import { MyContext } from "@/ContextApi/MyContextProvider";
import { GetAddedUsers } from "@/ContextApi/AddedUsers";
const Chats = () => {
  const { setData, setshowsettings } = useContext(MyContext);
  const { addedUsers, setCurrentChatUser } = useContext(GetAddedUsers);
  const clickedChat = () => {
    setData("Hello");
  };
  const currentChatUser = (chattingUser) => {
    setCurrentChatUser(chattingUser);
    clickedChat();
    setshowsettings(false);
    console.log(chattingUser.name);
  };
  return (
    <>
      {addedUsers.map((chatUser, index) => (
        <Box
          key={index}
          onClick={() => currentChatUser(chatUser)}
          sx={{
            width: "100%",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "8px 0px 0px 10px",
            cursor: "pointer",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.10)",
            },
          }}
        >
          <CssBaseline />
          <Box sx={{ width: "15%" }}>
            <Avatar
              sx={{ width: "50px", height: "55px" }}
              src={chatUser.proImgLink}
            />
          </Box>
          <Box
            sx={{
              borderBottom: "0.1px solid rgb(119, 114, 114)",
              width: "90%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: "10px",
              }}
            >
              <Typography variant='h5' sx={{ color: "white" }}>
                {chatUser.name}
              </Typography>
              <Typography variant='h6' sx={{ color: "#aebac1" }}>
                Time
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: "10px",
              }}
            >
              <Typography
                noWrap
                sx={{
                  color: "#aebac1",
                  maxWidth: "150px",
                  // height: "15px",
                }}
              >
                {chatUser.bio}
              </Typography>
              <ExpandMoreIcon
                sx={{ height: "24px", width: "24px", color: "#aebac1" }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Chats;
