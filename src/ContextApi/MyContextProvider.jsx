/** @format */

import React, { createContext, useState } from "react";

export const MyContext = createContext("");

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [showsettings, setshowsettings] = useState(false);
  const [ShowUser, setShowUser] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      <MyContext.Provider
        value={{
          data,
          setData,
          showsettings,
          setshowsettings,
          ShowUser,
          setShowUser,
          openProfile,
          setOpenProfile,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
};

export default MyContextProvider;
