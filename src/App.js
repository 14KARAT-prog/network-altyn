import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import state from './redux/state.js';

import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

function App() {

  return (
      <div className="App">
          <Header/>
          <Navbar navLink={state.navLink}/>
          <main>
              <Routes>
                  <Route path={'/profile'} element={<Content postsData={state.posts} />}/>
                  <Route path={'/dialogs'} element={<Dialogs dialogsData={state.dialogs} messagesData={state.messages} />}/>
                  <Route path={'/news'} element={<News />}/>
                  <Route path={'/music'} element={<Music />}/>
                  <Route path={'/settings'} element={<Settings />}/>
              </Routes>
          </main>
      </div>
  );
}

export default App;
