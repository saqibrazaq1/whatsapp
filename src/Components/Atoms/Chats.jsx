import { Box, Chip, CssBaseline, Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container } from "postcss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Chats = () => {
  return (
    <Box
      sx={{
        width: "95%",
        display: "grid",
        gridTemplateColumns: "0.8fr 5fr",
        marginTop: "10px",
      }}
    >
      <CssBaseline />
      <Box>
        <AccountCircleIcon
          sx={{ width: "42px", height: "42px", color: "#aebac1" }}
        />
      </Box>
      <Box sx={{ borderBottom: "0.1px solid rgb(119, 114, 114)" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{ color: "white" }}>
            User
          </Typography>
          <Typography variant="p" sx={{ color: "#aebac1" }}>
            Time
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "#aebac1" }}>message</Typography>
          <ExpandMoreIcon sx={{ color: "#aebac1" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Chats;
