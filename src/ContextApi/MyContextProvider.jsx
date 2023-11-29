import React, { createContext, useState } from "react";

export const MyContext = createContext("");

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [showsettings, setshowsettings] = useState(false);

  return (
    <>
      <MyContext.Provider
        value={{
          data,
          setData,
          showsettings,
          setshowsettings,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
};

export default MyContextProvider;
