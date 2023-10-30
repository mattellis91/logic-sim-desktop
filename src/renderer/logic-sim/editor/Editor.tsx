import { useEffect, useState } from "react";
import Dock from "./dock/Dock";
import { LogicSim } from "./logic-sim";
import Drawflow from "drawflow";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function Editor() {

    const [editor, setEditor] = useState<LogicSim>();
    const [openPanel, setOpenPanel] = useState<boolean>(false);

    useEffect(() => {
        setEditor(new LogicSim('drawflow'));
    }, []);
    
    return (
        <div>
            <div id="drawflow-wrapper">
                {/* <button onClick={() => setOpenPanel(true)}>Open</button> */}
                <div id="drawflow" />
                {/* <Dock editor={editor} />
                <SlidingPanel type={'right'} isOpen={openPanel} size={20}>
                    <div>
                        <div>Panel Test</div>
                        <button onClick={() => setOpenPanel(false)}>Close</button>
                    </div>
                </SlidingPanel> */}
            </div>
        </div>
    )
}