/** @format */

import React from "react";
import {
  Box,
  Typography,
  Toolbar,
  AppBar,
  Avatar,
  Button,
  label,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatSearch from "../Atoms/ChatSearch";
import PopBarIcons from "./PopBarIcons";
import PersonAdd from "@mui/icons-material";
import { useContext } from "react";
import { MyContext } from "@/ContextApi/MyContextProvider";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { ref, uploadBytes, getDownloadURL, storage } from "firebase/storage";
import ProfileSideBarBox from "./profilebar";
import { getLoggedUser } from "@/ContextApi/GetLoggedUser";
// const router = useRouter();
const Sidepopbar = () => {
  const { user } = useContext(getLoggedUser);
  const { setshowsettings } = useContext(MyContext);
  const router = useRouter();

  const closesidebar = () => {
    setshowsettings(false);
  };

  const handleChange = (e) => {
    console.log("working");
    router.push("/");
  };

  // /// /////       uploading image  /////////

  return (
    <>
      <Box
        sx={{
          height: "96vh",
          backgroundColor: "#0D161C",
          borderRight: "1px solid rgba(255, 255, 255, 0.20)",
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
              <ArrowBackIcon
                sx={{ cursor: "pointer" }}
                onClick={closesidebar}
              />
              <Typography sx={{ marginLeft: "20px" }} variant='p'>
                Settings
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
          <Box>
            <ProfileSideBarBox />
          </Box>
          <Box>
            <Box>
              <PopBarIcons icons={ArrowBackIcon} text={"Notifications"} />
              <PopBarIcons icons={PersonAdd} text={"Privacy"} />
              <PopBarIcons icons={PersonAdd} text={"Securtiy"} />
              <PopBarIcons icons={PersonAdd} text={"Theme"} />
              <PopBarIcons icons={PersonAdd} text={"Chat Wallpaper"} />
              <PopBarIcons icons={PersonAdd} text={"Media auto-download"} />
              <PopBarIcons icons={PersonAdd} text={"Request account info"} />
              <PopBarIcons icons={PersonAdd} text={"Keyboard shortcuts"} />
              <PopBarIcons icons={PersonAdd} text={"Help"} />
              <Box onClick={handleChange} sx={{ width: "100%" }}>
                <PopBarIcons
                  icons={PersonAdd}
                  text={"Log Out"}
                  style={{ color: "red" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Sidepopbar;
