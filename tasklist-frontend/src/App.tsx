import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import { AddTask } from './components/AddTask';
import { Component1 } from './components/Component1';

function App() {
  return (
    <Routes>
    <Route path="" element={<Component1/>}/>
    <Route path="add" element={<AddTask/>}/>
   
</Routes>
  );
}

export default App;
