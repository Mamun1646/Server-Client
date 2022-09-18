import React from "react";
import UserForm from "./crud/createUser";
import Read from "./crud/read";
import OneUser from './crud/oneUser'
import  './App.css'

function App() {
  return (
    <div className="container">
      <div class="btn-group">
  <button>Apple</button>
  <button>Samsung</button>
  <button>Sony</button>
</div>
    
      <UserForm />
      <Read/>

    </div>
  );
}

export default App;
