import React from "react";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Profile />
      <Home />
      <About />
      <Service />
      <Contact />
    </>
  );
};

export default App;
