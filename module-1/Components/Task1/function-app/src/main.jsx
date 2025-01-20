import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Employe from "./components/EmployeData";
import './style.css'
createRoot(document.getElementById("demo")).render(
    <>
      <div className="app">
      <Employe /> 
      </div>
      
    </>
)