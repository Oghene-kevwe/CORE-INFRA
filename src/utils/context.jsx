import React, { useContext, useReducer } from "react";
import { appReducer } from "./reducer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = React.createContext();

const defaultState = {
  activePage: "",
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showUserSidebar, setShowUserSidebar] = useState(false);

  useEffect(() => {
    // Add an event listener to update the window width when it changes
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // show sidebar when screen is greater than 1023
  useEffect(() => {
    if (windowWidth > 1023) {
      setShowUserSidebar(true);
    } else {
      setShowUserSidebar(false);
    }
  }, [windowWidth]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // check and set active page on page refresh
  useEffect(() => {
    dispatch({
      type: "CHANGE_ACTIVE_PAGE",
      payload: sessionStorage.getItem("activePage"),
    });
  }, []);


  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};