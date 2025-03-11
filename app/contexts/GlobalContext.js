import React, { createContext, useState } from 'react';

// Create context
export const GlobalContext = createContext();

// GlobalContext provider component
export const GlobalProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState("");
  const [jwtTimestamp, setJwtTimestamp] = useState(3)
    //I AM FABULOUS
  return (
    <GlobalContext.Provider value={{jwtToken, setJwtToken , jwtTimestamp, setJwtTimestamp,}}>
      {children}
    </GlobalContext.Provider>
  );
};