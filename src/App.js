import React from "react";
import Todo from "./components/Todo";
import Login from "./components/Login";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </>
  );
};

export default App;
