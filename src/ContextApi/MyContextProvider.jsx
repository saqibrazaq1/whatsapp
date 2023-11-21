// context.js
import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chatVisible, setChatVisible] = useState(false);

  const showChat = () => setChatVisible(true);

  return (
    <ChatContext.Provider value={{ chatVisible, showChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
