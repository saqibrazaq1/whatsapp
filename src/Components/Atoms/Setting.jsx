import { Box, Typography } from "@mui/material";
import React from "react";

const Setting = () => {
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        lineHeight: "25px",
      }}
    >
      <Typography variant="p">New Group</Typography>
      <Typography variant="p">New Community</Typography>
      <Typography variant="p">Starred Messages</Typography>
      <Typography variant="p">Select Chats</Typography>
      <Typography variant="p">Settings</Typography>
      <Typography variant="p">Log Out</Typography>
    </Box>
  );
};

export default Setting;
