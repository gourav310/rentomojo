import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import "./style.css";
import UserPosts from "./userPosts";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";
import Table from "./table.js";
import PostDetails from "./postDetails.js";
export default function App() {
  //button for dark mode
  const history =useHistory();
  const [mode, setMode] = useState("light");
  const [isDarkMode, setButton] = useState(false);
  const setIsDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      setButton(true);
    } else [setMode("light"), setButton(false)];
  };
  return (
    //table for 
    <ThemeProvider theme={{ mode: mode }}>
      <GlobalStyle />
      <div className="navbar">
        <span className="heading" onClick={()=>history.push("/")}>
          <h1>Rentomojo</h1>
          <p>Blog Posts</p>
        </span>
        <div className="button">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={40}
          />
          <div>Switch Modes</div>
        </div>
      </div>
       { /* Switch for paths */}
      <Switch>
      { /* post details */}
        <Route path="/postDetails" render={() => <PostDetails mode={mode} />} />
        { /* all post by user */}
        <Route path="/posts/:name" render={() => <UserPosts mode={mode} />} />
        { /* home page */}
        <Route path="/" render={() => <Table mode={mode} />} />
      </Switch>
    </ThemeProvider>
  );
}
