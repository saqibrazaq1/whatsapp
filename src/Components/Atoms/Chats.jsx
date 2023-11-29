import { Avatar, Box, CssBaseline, Typography } from "@mui/material";
import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container } from "postcss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import WebChats from "./WebChats";
import { MyContext } from "@/ContextApi/MyContextProvider";
const Chats = () => {
  const { setData } = useContext(MyContext);

  const clickedChat = () => {
    setData("Hello");
  };
  return (
    <Box
      onClick={clickedChat}
      sx={{
        width: "100%",
        height: "100rem",
        display: "grid",
        alignSelf: "center",
        placeSelf: "center",
        gridTemplateColumns: "0.8fr 5fr",
        padding: "8px 0px 0px 10px",
        cursor: "pointer",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.10)",
        },
      }}
    >
      <CssBaseline />
      <Box sx={{ height: "60px" }}>
        <Avatar
          src="/profile.JPG"
          sx={{ width: "50px", height: "50px" }}
        ></Avatar>
      </Box>
      <Box sx={{ borderBottom: "0.1px solid rgb(119, 114, 114)" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "10px",
          }}
        >
          <Typography variant="h5" sx={{ color: "white" }}>
            User
          </Typography>
          <Typography variant="h6" sx={{ color: "#aebac1" }}>
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
              height: "15px",
            }}
          >
            message
          </Typography>
          <ExpandMoreIcon
            sx={{ height: "24px", width: "24px", color: "#aebac1" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Chats;
