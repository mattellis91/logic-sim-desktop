import { useEffect, useState } from "react";
import Dock from "./dock/Dock";
import { LogicSim } from "./logic-sim";
import Drawflow from "drawflow";
import SlidingPanel from "react-sliding-side-panel";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function Editor() {

    const [editor, setEditor] = useState<LogicSim>();
    const [openPanel, setOpenPanel] = useState<boolean>(false);

    useEffect(() => {
        setEditor(new LogicSim('drawflow'));
    }, []);
    
    return (
        <div>
            <Sidebar style={{ position:"absolute", height: "100vh" }} collapsed={true}> 
                <Menu>
                        <SubMenu label="Inputs"> 
                            <MenuItem> Constant (On) </MenuItem>
                            <MenuItem> Constant (Off) </MenuItem>
                            <MenuItem> Switch </MenuItem>
                            <MenuItem> Clock </MenuItem>
                            <MenuItem> Button </MenuItem>
                            <MenuItem> Delay </MenuItem>
                        </SubMenu>
                        <SubMenu label="Outputs"> 
                            <MenuItem>
                                <div style={{width: "100%", height: "100px", background:"#333"}}>

                                </div>
                            </MenuItem>
                        </SubMenu>
                        <SubMenu label="Gates">
                            <MenuItem> AND </MenuItem>
                            <MenuItem> OR </MenuItem>
                            <MenuItem> NOT </MenuItem>
                            <MenuItem> XOR </MenuItem>
                            <MenuItem> NAND </MenuItem>
                            <MenuItem> NOR </MenuItem>
                            <MenuItem> XNOR </MenuItem>
                        </SubMenu>
                </Menu>
            </Sidebar>
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