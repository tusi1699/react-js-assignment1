import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IfApp from "./components/IfApp";
import IfElseIf from "./components/IfElseIf";
import IfElse from "./components/IfElse";
import Nestedapp from "./components/Nestedapp";
import TurnaryApp from "./components/TurnaryApp";
createRoot(document.getElementById("root")).render(
    <StrictMode>
<IfApp/>
<IfElseIf/>
<IfElse/>
<Nestedapp/>
<TurnaryApp/>
    </StrictMode>
)