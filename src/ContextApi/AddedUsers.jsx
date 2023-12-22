/** @format */

import { useState, useEffect, createContext } from "react";
import {
  db,
  collection,
  query,
  onSnapshot,
  doc,
  setDoc,
  onAuthStateChanged,
  auth,
} from "../Components/Firebase/FirebaseConfig";

export const GetAddedUsers = createContext();

const GetAddedUsersProvider = ({ children }) => {
  const [currentChatUser, setCurrentChatUser] = useState();

  const [addedUsers, setAddedUsers] = useState([]);

  const addNewUser = (addUser) => {
    onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        try {
          const contactedUsersRef = doc(
            db,
            "users",
            loggedInUser.uid,
            "contactedUsers",
            addUser.id
          );
          setDoc(contactedUsersRef, addUser);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }
    });
  };

  const GetAddeUserCollection = () => {
    onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        const q = query(
          collection(db, "users", loggedInUser.uid, "contactedUsers")
        );

        onSnapshot(q, (querySnapshot) => {
          const getSubCollection = [];
          querySnapshot.forEach((doc) => {
            getSubCollection.push({ ...doc.data(), id: doc.id });
          });
          console.log(getSubCollection);

          setAddedUsers(getSubCollection);
        });
      }
    });
  };
  useEffect(() => {
    GetAddeUserCollection();
  }, []);

  return (
    <GetAddedUsers.Provider
      value={{ addNewUser, addedUsers, currentChatUser, setCurrentChatUser }}
    >
      {children}
    </GetAddedUsers.Provider>
  );
};

export default GetAddedUsersProvider;
