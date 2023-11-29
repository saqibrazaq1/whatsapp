import React from "react";
import { Typography, Box, Toolbar, AppBar } from "@mui/material";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";

const WebChatsfutter = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#202c33",
          height: "50px",
          display: "flex",
          justifyContent: "center",
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
              sx={{
                width: "24px",
                height: "24px",
                color: "#aebac1",
                cursor: "pointer",
              }}
            />
            <AddIcon
              sx={{
                width: "24px",
                height: "24px",
                color: "#aebac1",
                cursor: "pointer",
              }}
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
              sx={{
                width: "24px",
                height: "24px",
                color: "#aebac1",
                cursor: "pointer",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default WebChatsfutter;
