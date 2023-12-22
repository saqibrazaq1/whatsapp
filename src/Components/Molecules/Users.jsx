/** @format */

import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import ChatSearch from "../Atoms/ChatSearch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MyContext } from "@/ContextApi/MyContextProvider";
import { useContext } from "react";
import { GetAddedUsers } from "@/ContextApi/AddedUsers";
import { GetRegUsersContext } from "@/ContextApi/GetRegUsers";

const Users = () => {
  const { Showusers, setShowUser } = useContext(MyContext);
  const { addNewUser } = useContext(GetAddedUsers);
  const { userCollection } = useContext(GetRegUsersContext);
  const showusers = () => {
    setShowUser(false);
  };

  return (
    <Box sx={{ height: "97vh" }}>
      <Box sx={{ height: "110px" }}>
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
            <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={showusers} />
            <Typography sx={{ marginLeft: "20px" }} variant='p'>
              New Chat
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
          <Box sx={{ width: "100%" }}>
            {userCollection.map((user, index) => (
              <Box
                onClick={() => addNewUser(user)}
                key={index}
                sx={{
                  display: "flex",
                  // height: "80px",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  alignItems: "center",
                  ":hover": { backgroundColor: "#f0f2f61c" },
                }}
              >
                <Box sx={{ width: "10%" }}>
                  <Avatar
                    sx={{ width: "50px", height: "50px" }}
                    src={user.proImgLink}
                  />
                </Box>
                <Box
                  sx={{
                    width: "85%",
                    borderBottom: "1px solid white",
                    padding: "10px 0 ",
                  }}
                >
                  <Typography variant='h5' key={user.id}>
                    {user.name ? user.name : user.number}
                  </Typography>
                  <Typography variant='h6'>{user.number}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Users;
