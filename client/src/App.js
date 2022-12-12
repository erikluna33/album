import React from "react";
import './App.css';
import AllMemories from "./components/AllMemories";
import axios from 'axios';
import {Link} from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NewMemories from "./components/NewMemories";
import OneMemory from "./components/OneMemory";
import EditMemory from "./components/EditMemory";
import moment from "moment";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<AllMemories />} path="/"/>
          <Route element={<NewMemories />} path="/new"/>
          <Route element={<OneMemory />} path="/memory/:id"/>
          <Route element={<EditMemory />} path="/memory/edit/:id"/>

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
