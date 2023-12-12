/** @format */

import { Avatar, Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  setDoc,
  doc,
  db,
} from "../Firebase/FirebaseConfig";
import { getLoggedUser } from "@/ContextApi/GetLoggedUser";
import { MyContext } from "@/ContextApi/MyContextProvider";

const ProfileSideBarBox = () => {
  const { user } = useContext(getLoggedUser);
  const { setOpenProfile } = useContext(MyContext);
  const [profileImg, setProfileImg] = useState(null);

  const handleChange = async (e) => {
    const userImage = e.target.files[0];

    if (userImage && user) {
      const imageUrl = URL.createObjectURL(userImage);
      setProfileImg(imageUrl);

      // Create a storage reference
      const storageRef = ref(
        storage,
        `profile_images/${user.userId}_${userImage.name}`
      );

      await uploadBytes(storageRef, userImage);

      // Get the download URL of the uploaded image
      const downloadUrl = await getDownloadURL(storageRef);

      // Update user document with the image URL
      const userDocRef = doc(db, "users", user.userId); // Replace 'YOUR_COLLECTION' with your actual collection name
      await setDoc(userDocRef, { proImgLink: downloadUrl }, { merge: true });

      // console.log(
      //   'Image uploaded to Firebase Storage and user document:',
      //   downloadUrl
      // );
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#0D161C",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          bgcolor: "#f0f2f63b",
        },
      }}
      onClick={() => setOpenProfile(true)}
    >
      <Box sx={{ padding: "8px 20px" }}>
        <label
          htmlFor='avatar-input'
          sx={{ width: 48, height: 48, bgcolor: "red", cursor: "pointer" }}
        >
          <Avatar
            src={user?.proImgLink}
            alt='userProImg'
            sx={{ width: 85, height: 85 }}
          />
          <input
            id='avatar-input'
            type='file'
            accept='image/*'
            onChange={handleChange}
            style={{ display: "none" }}
          />
        </label>
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <Typography variant='h6' sx={{ color: "white", fontSize: "16px" }}>
          {user?.name}
        </Typography>
        <Typography variant='span' sx={{ color: "white", fontSize: "12px" }}>
          Bio: Tell Something About Yourself
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileSideBarBox;
