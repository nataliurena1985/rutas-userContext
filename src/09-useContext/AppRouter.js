import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { HomeScreen } from "./HomeScreen";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
