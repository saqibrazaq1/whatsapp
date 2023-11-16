import React from "react";
import ChatListBar from "../Atoms/ChatListBar";
import Chating from "../Atoms/Chating";
import { Box } from "@mui/material";
import ChatSearch from "../Atoms/ChatSearch";
const Structure = () => {
  return (
    <>
      <Box
        style={{
          width: "87%",
          height: "96vh",
          display: "grid",
          gridTemplateColumns: "2.2fr 5fr",
          backgroundColor: "#0c1317",
          margin: "15px auto",
        }}
      >
        <ChatListBar />
        <Chating />
      </Box>
    </>
  );
};

export default Structure;
