import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './style.css'

createRoot(document.getElementById("demo")).render(
<StrictMode>
    <div className="app">
<h1>"Hello, React!"</h1>
    </div>
</StrictMode>
)