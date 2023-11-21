import React from "react";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
const WebChats = ({ isBoxVisible }) => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ background: "#222e35", color: "white" }}>
        <Box sx={{ height: "96vh" }}>
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
                    width: "37px",
                    height: "37px",
                  }}
                />
                <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                  User
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SearchIcon
                  sx={{ color: "#aebac1", height: "19px", width: "19px" }}
                />
                <MoreVertRoundedIcon
                  sx={{
                    margin: "0 18px",
                    height: "19px",
                    width: "19px",
                    color: "#aebac1",
                  }}
                />
              </Box>
            </Toolbar>
          </AppBar>
          <Box sx={{ backgroundSize: "cover", height: "84.5vh" }}></Box>
          <Box>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#202c33",
                height: "47px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Toolbar
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 23fr 0fr",
                  placeItems: "center",
                  placeSelf: "center",
                  // justifyItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginRight: "15px",
                    width: "100%",
                  }}
                >
                  <SentimentVerySatisfiedIcon
                    sx={{ width: "22px", height: "22px", color: "#aebac1" }}
                  />
                  <AddIcon
                    sx={{ width: "22px", height: "22px", color: "#aebac1" }}
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <form className="chat-inpuut">
                    <input type="text" placeholder="Type a Message" />
                  </form>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginLeft: "15px",
                  }}
                >
                  <MicIcon
                    sx={{ width: "22px", height: "22px", color: "#aebac1" }}
                  />
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WebChats;
