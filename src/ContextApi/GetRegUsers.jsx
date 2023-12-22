/** @format */

import { useContext, useEffect, useState } from "react";
import {
  db,
  collection,
  query,
  where,
  onSnapshot,
} from "../Components/Firebase/FirebaseConfig";
import { createContext } from "react";

export const GetRegUsersContext = createContext();

const GetRegUsersProvider = ({ children }) => {
  const [userCollection, setUserCollection] = useState([]);

  const fetchData = async () => {
    const path = query(collection(db, "users"));
    onSnapshot(path, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setUserCollection(users);
      console.log(users);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <GetRegUsersContext.Provider value={{ userCollection, fetchData }}>
      {children}
    </GetRegUsersContext.Provider>
  );
};

export default GetRegUsersProvider;
