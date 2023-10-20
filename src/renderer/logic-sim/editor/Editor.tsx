import { useEffect } from "react";
import Dock from "./dock/Dock";
import { LogicSim } from "./logic-sim";

export default function Editor() {

    useEffect(() => {
        new LogicSim('drawflow');
    });
    
    return (
        <div id="drawflow-wrapper">
            <div id="drawflow" />
            <Dock />
        </div>
    )
}