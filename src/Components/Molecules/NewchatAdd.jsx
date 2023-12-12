import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatSearch from "../Atoms/ChatSearch";

import { useContext } from "react";
import { MyContext } from "@/ContextApi/MyContextProvider";

const NewchatAdd = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "110px",
        margin: "0 auto",
      }}
    >
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
          <ArrowBackIcon sx={{ cursor: "pointer" }} />
          <Typography sx={{ marginLeft: "20px" }} variant="p">
            new chat
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 11fr",
          alignItems: "center",
          margin: "10px 15px",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <Avatar sx={{ height: "65px", width: "65px" }}></Avatar>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            marginLeft: "20px",
            color: "white",
          }}
        >
          <Typography sx={{ fontSize: "11px" }} variant="p">
            New Group
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NewchatAdd;
