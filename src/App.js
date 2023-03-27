import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Assets/main.css";
import Form from "./components/Form";
import Jadval from "./components/Jadval";
// Pictures
function App() {
  return (
    <>
    <div className="container">
    <Form/>
    <Jadval/>
    </div>
    </>
  );
}

export default App;
