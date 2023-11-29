import React from "react";
import ChatListBar from "../Atoms/ChatListBar";
import Chating from "../Atoms/Chating";
import { Box } from "@mui/material";
import Sidepopbar from "../Atoms/Sidepopbar";
// import ChatSearch from "../Atoms/ChatSearch";
// import { useState } from "react";
// import Chats from "../Atoms/Chats";
import { Context } from "react";
import { MyContext } from "@/ContextApi/MyContextProvider";
import { useContext } from "react";
import Signup from "./SignUp";

const Structure = () => {
  const { showsettings } = useContext(MyContext);

  return (
    <>
      <Box
        style={{
          width: "87%",
          height: "95vh",
          display: "grid",
          gridTemplateColumns: "2.2fr 5fr",
          backgroundColor: "#0c1317",
          margin: "15px auto",
        }}
      >
        <Box sx={{ background: "#222e35", color: "white" }}>
          {showsettings ? <Sidepopbar /> : <ChatListBar />}
        </Box>

        <Chating />
      </Box>
      {/* <Signup />   */}
    </>
  );
};

export default Structure;
