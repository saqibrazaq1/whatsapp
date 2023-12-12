/** @format */

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import ChatSearch from "../Atoms/ChatSearch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MyContext } from "@/ContextApi/MyContextProvider";
import { useContext } from "react";

const Users = () => {
  const { Showusers, setShowUser } = useContext(MyContext);

  const showusers = () => {
    setShowUser(false);
  };

  return (
    <Box sx={{ height: "97vh", backgroundColor: "red" }}>
      <Box sx={{ height: "110px" }}>
        <AppBar
          sx={{
            position: "static",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            backgroundColor: "#202c33",
          }}
        >
          <Toolbar sx={{ color: "white" }}>
            <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={showusers} />
            <Typography sx={{ marginLeft: "20px" }} variant='p'>
              New Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            height: "45px",
          }}
        >
          <ChatSearch />
        </Box>
      </Box>
    </Box>
  );
};

export default Users;
