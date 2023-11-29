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
import WhatsApp from "../../assets/whatsapp.jpg";
import Webchatsbar from "./Webchatsbar";
import WebChatsfutter from "./WebChatsfutter";
import Messages from "./Messages";
const WebChats = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ background: "#222e35", color: "white" }}>
        <Box sx={{ height: "96vh" }}>
          <Webchatsbar />
          <Box
            sx={{
              height: "84.5vh",
              overflow: "auto",
              backgroundColor: "#0c1315",
              padding: "0 40px",
            }}
          >
            {/* <Image className="whatsapp-img" src={WhatsApp} /> */}

            <Messages />
          </Box>
          <WebChatsfutter />
        </Box>
      </Box>
    </>
  );
};

export default WebChats;
