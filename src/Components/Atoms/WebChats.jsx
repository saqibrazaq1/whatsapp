/** @format */

"use client";
import { useContext, useState, useEffect } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Tooltip,
  Typography,
  MenuItem,
  Menu,
  ListItemIcon,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";
import Button from "@mui/material/Button";
import VideocamIcon from "@mui/icons-material/Videocam";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import AddIcon from "@mui/icons-material/Add";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import DescriptionIcon from "@mui/icons-material/Description";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";
import PollIcon from "@mui/icons-material/Poll";
import LabelIcon from "@mui/icons-material/Label";
import { getLoggedUser } from "@/ContextApi/GetLoggedUser";
import { GetAddedUsers } from "@/ContextApi/AddedUsers";
import { pink, purple, yellow } from "@mui/material/colors";
import {
  doc,
  addDoc,
  db,
  collection,
  query,
  where,
  deleteDoc,
  onSnapshot,
} from "../Firebase/FirebaseConfig";
import InputFileUpload from "../Molecules/Inputs";
import { Download } from "@mui/icons-material";

const Message = ({ message, userId, onDelete }) => {
  const isSentByMe = message.senderId === userId;

  const messageStyle = {
    borderRadius: isSentByMe ? "16px 0px 16px 16px" : "0px 16px 16px 16px",
    padding: "6px 12px 6px 8px",
    marginBottom: "20px",
    bgcolor: isSentByMe ? "#00a884" : "#202c33",
    maxWidth: "300px",
    width: "fit-content",
    position: "relative",
    top: "10px",
    left: isSentByMe ? "90%" : "12px",
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const downloadFile = () => {
    console.log("Downloaded");
    {
      message.filesObj.fileDownloadLink;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "8px 10px 8px 10px",
        display: "grid",
      }}
    >
      <Box sx={messageStyle}>
        <Typography
          variant='h6'
          sx={{
            fontSize: "14px",
            position: "relative",
            padding: "10px 4px 0px 10px",
          }}
        >
          {message.filesObj && (
            <Box
              sx={{
                width: "300px",
                height: "192px",
              }}
            >
              <Box sx={{ width: "260px", height: "124px" }}>
                <Avatar
                  src={message.filesObj.fileDownloadLink}
                  sx={{ width: "100%", height: "100%" }}
                  variant='square'
                />
                {/* <Box
                component='img'
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt='The house from the offer.'
              src={message.filesObj.fileDownloadLink}
              /> */}
              </Box>
              <Box sx={{ bgcolor: "pink", flexGrow: 1, width: "260px" }}>
                <Typography
                  variant='h3'
                  sx={{ fontSize: "16px", color: "#333" }}
                >
                  {message.filesObj.fileName}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Download onClick={downloadFile} />
                  <Typography
                    variant='h6'
                    sx={{ fontSize: "12px", color: "#333" }}
                  >
                    {message.filesObj.fileType}
                  </Typography>
                  {/* <Typography
                variant='h6'
                sx={{ fontSize: '12px', color: '#333' }}
              >
                {message.filesObj.fileSize}
              </Typography> */}
                </Box>
              </Box>
            </Box>
          )}
          {message.messageText}
          <IconButton
            id='basic-button'
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ position: "absolute", right: "0px" }}
          >
            <MoreVertOutlinedIcon sx={{ color: "#fff", fontSize: "11px" }} />
          </IconButton>
        </Typography>
        <Box
          sx={{
            marginTop: "6px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => onDelete(message.msgDocId)}>
              Delete Msg
            </MenuItem>
            <MenuItem>Edit Msg</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

const WebChats = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [send, setSend] = useState(null);

  const [message, setMessage] = useState("");
  const { user } = useContext(getLoggedUser);
  const { currentChatUser, setCurrentChatUser } = useContext(GetAddedUsers);
  const [chatMessages, setChatMessages] = useState([]);

  const getChatmessages = async () => {
    try {
      onSnapshot(
        query(
          collection(db, "chats"),
          where("senderId", "in", [user.userId, currentChatUser.id]),
          where("receiverId", "in", [user.userId, currentChatUser.id])
        ),
        (querySnapshot) => {
          const allMessages = [];
          querySnapshot.forEach((doc) => {
            const messageData = doc.data();
            const msgDocId = doc.id;
            const dateObject = new Date(messageData.date);
            allMessages.push({ ...messageData, dateObject, msgDocId });
          });
          allMessages.sort((a, b) => a.date - b.date);
          setChatMessages(allMessages);
        }
      );
    } catch (error) {
      console.error("Error fetching chat messages:", error);
      return [];
    }
  };

  const date = new Date();
  const sendMessage = async (e) => {
    if (e.key !== "Enter" || !currentChatUser.id || !user.userId) return;

    const chat = {
      senderId: user.userId,
      receiverId: currentChatUser.id,
      messageText: message,
      date: Date.now(),
    };

    try {
      const collectionRef = collection(db, "chats");
      await addDoc(collectionRef, chat);
      setChatMessages((prevMessages) => [...prevMessages, chat]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleDelete = async (deltedMsgId) => {
    try {
      const deleteMsgRef = doc(db, "chats", deltedMsgId);
      deleteDoc(deleteMsgRef);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const open = Boolean(anchorEl);
  const openDoc = Boolean(send);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickDoc = (event) => {
    setSend(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSend(null);
  };
  const handleCloseChat = () => {
    setCurrentChatUser(null);
  };
  useEffect(() => {
    getChatmessages();
  }, [currentChatUser?.id]);

  const handleMenuItemClick = () => {
    console.log("hello");
  };
  const chatbg =
    "https://i.pinimg.com/564x/ae/aa/07/aeaa0746d1061c3a4a958088cd77ccf9.jpg";
  return (
    <>
      <Box sx={{ height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            padding: "8px 16px ",
            bgcolor: "#202c33",
            minHeight: "54px",
            maxHeight: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar alt='User' src={currentChatUser?.proImgLink} />
            <Box sx={{ fontSize: "14px", color: "#fff" }}>
              <Typography variant='h6'>{currentChatUser?.name}</Typography>
              <Typography variant='p'>
                <small>Last seen today at 13:08</small>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ color: "#54656f" }}>
            <Tooltip title='Get the App for calling'>
              <Button
                variant='filledTonal'
                sx={{
                  borderRadius: "25px",
                  color: "white",
                }}
              >
                <VideocamIcon />
                <ExpandMoreIcon sx={{ color: "white" }} />
              </Button>
            </Tooltip>
            <Tooltip title='Seacrh...'>
              <IconButton>
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title='Menu'>
              <IconButton
                id='basic-button'
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "white" }}
              >
                <MoreVertOutlinedIcon fontSize='md' />
              </IconButton>
            </Tooltip>
            <Menu
              className='moreIcon-sub'
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Contact info
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Select messages
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleCloseChat}>
                Close chat
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Mute notifications
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Disappering messages
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Clear chat
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Delete chat
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Report
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Block
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${chatbg})`,
            bgcolor: "#202c33",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "820px",
            position: "relative",
            overflow: "auto",
          }}
        >
          {chatMessages.map((message, index) => (
            <Message
              key={index}
              message={message}
              userId={user.userId}
              onDelete={handleDelete}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            bgcolor: "#202c33",
            width: "100%",
            padding: "8px 16px 8px 30px ",
            color: "#8696a0",
            maxHeight: "54px",
          }}
        >
          <IconButton>
            <SentimentSatisfiedAltOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            id='basic-button'
            aria-controls={openDoc ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={openDoc ? "true" : undefined}
            onClick={handleClickDoc}
          >
            <AddIcon
              sx={
                openDoc
                  ? { transform: "rotate(135deg)", transition: "all 0.3s" }
                  : { transition: "all 0.3s" }
              }
            />
          </IconButton>
          <Menu
            sx={{
              ".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                bgcolor: "#233138",
                borderRadius: " 16px",
                bottom: "75px !important",
                left: "650px !important",
                top: "unset !important",
              },
            }}
            className='moreIcon-sub'
            id='basic-menu'
            anchorEl={send}
            open={openDoc}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              <InputFileUpload
                text='Document'
                icon={
                  <ListItemIcon>
                    <DescriptionIcon color='secondary' />
                  </ListItemIcon>
                }
                onClick={handleMenuItemClick}
                fileType='file'
              />
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              <InputFileUpload
                text='Photos & Videos'
                icon={
                  <ListItemIcon>
                    <PhotoLibraryIcon color='success' />
                  </ListItemIcon>
                }
                onClick={handleMenuItemClick}
                fileType='file'
                accept='image/*'
              />
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              <InputFileUpload
                text='Photos & Videos'
                icon={
                  <ListItemIcon>
                    <CameraAltIcon sx={{ color: pink[500] }} />
                  </ListItemIcon>
                }
                onClick={handleMenuItemClick}
                fileType='video/*'
              />
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              <InputFileUpload
                text='Contact'
                icon={
                  <ListItemIcon>
                    <PersonIcon sx={{ color: purple[500] }} />
                  </ListItemIcon>
                }
                onClick={handleMenuItemClick}
                fileType='text/vcard'
              />
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              <InputFileUpload
                text='Poll'
                icon={
                  <ListItemIcon>
                    <PollIcon sx={{ color: yellow[500] }} />
                  </ListItemIcon>
                }
                onClick={handleMenuItemClick}
                fileType='application/json'
              />
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              <InputFileUpload
                text='Label'
                icon={
                  <ListItemIcon>
                    <LabelIcon color='primary' />
                  </ListItemIcon>
                }
                onClick={handleMenuItemClick}
                fileType='text/plain'
              />
            </MenuItem>
          </Menu>

          <InputBase
            size='small'
            placeholder='Type a Message'
            sx={{
              width: "100%",
              padding: "6px 14px",
              bgcolor: "#2a3942",
              borderRadius: "7px",
              flexGrow: "1",
              color: "white",
            }}
            variant='outlined'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={sendMessage}
          />
          <IconButton>
            <KeyboardVoiceIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default WebChats;
