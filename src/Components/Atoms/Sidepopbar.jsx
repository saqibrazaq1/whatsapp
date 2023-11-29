import React from "react";
import { Box, Typography, Toolbar, AppBar, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatSearch from "../Atoms/ChatSearch";
import PopBarIcons from "./PopBarIcons";
import PersonAdd from "@mui/icons-material";
import { useContext } from "react";
import { MyContext } from "@/ContextApi/MyContextProvider";
import { useRouter } from "next/router";
import SignIn from "../Molecules/SignIn";
import Signup from "../Molecules/SignUp";

const Sidepopbar = () => {
  const { setshowsettings } = useContext(MyContext);
  const router = useRouter();
  // const openSettings = () => {
  //   setshowsettings(true);
  // };
  const closesidebar = () => {
    setshowsettings(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    router.push("/Signin");
  };
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
              <Typography sx={{ marginLeft: "20px" }} variant="p">
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
            <Avatar
              src="profile.jpg"
              sx={{ height: "75px", width: "75px" }}
            ></Avatar>
            <Box
              sx={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                marginLeft: "20px",
                color: "white",
              }}
            >
              <Typography sx={{ fontSize: "11px" }} variant="p">
                Saqib Razaq
              </Typography>
              <Typography sx={{ fontSize: "9px" }} variant="p">
                Codependent{" "}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ "&:last-child": { color: "red" } }}>
            <PopBarIcons icons={PersonAdd} text={"Notifications"} />
            <PopBarIcons icons={PersonAdd} text={"Privacy"} />
            <PopBarIcons icons={PersonAdd} text={"Securtiy"} />
            <PopBarIcons icons={PersonAdd} text={"Theme"} />
            <PopBarIcons icons={PersonAdd} text={"Chat Wallpaper"} />
            <PopBarIcons icons={PersonAdd} text={"Media auto-download"} />
            <PopBarIcons icons={PersonAdd} text={"Request account info"} />
            <PopBarIcons icons={PersonAdd} text={"Keyboard shortcuts"} />
            <PopBarIcons icons={PersonAdd} text={"Help"} />
            <PopBarIcons
              onClick={handleChange}
              icons={PersonAdd}
              text={"Log Out"}
              sx={{ color: "red" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidepopbar;
