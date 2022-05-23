import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

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
          <Navbar/>
          <main>
              <Routes>
                  <Route path={'/profile'} element={<Content />}/>
                  <Route path={'/dialogs'} element={<Dialogs />}/>
                  <Route path={'/news'} element={<News />}/>
                  <Route path={'/music'} element={<Music />}/>
                  <Route path={'/settings'} element={<Settings />}/>
              </Routes>
          </main>
      </div>
  );
}

export default App;
