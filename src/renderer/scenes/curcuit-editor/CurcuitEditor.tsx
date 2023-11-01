import { Box } from '@mui/material';
import { useEffect, useState } from "react";
import { LogicSim } from '../../logic-sim/editor/logic-sim';
import CurcuitEditorComponents from './CurcuitEditorComponents';
import CurcuitEditorInputs from './CurcuitEditorInputs';

interface CurcuitInput {        
    id: string,
    label: string,
    state: boolean,
}

interface AddedComponent {
    id: string,
    label: string,
    type: string,
    x: number,
    y: number,
    state: boolean,
}

const CurcuitEditor = () => {

    const [editor, setEditor] = useState<LogicSim>();
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
    const [curcuitInputs, setCurcuitInputs] = useState<CurcuitInput[]>([]);

    useEffect(() => {
        setEditor(new LogicSim('drawflow', {
            onEditorClick: onEditorClick,
            onComponentAdded: onComponentAdded,
            setInputState: setInputState,
        }));
    }, []);

    const onEditorClick = () => {
        if(selectedComponent) {
            setSelectedComponent(null);
        }
    }

    const onComponentAdded = (addedComponent: AddedComponent) => {
        console.log('Added component: ');
        console.log(addedComponent);
    }

    const handleSelectedComponent = (id: string) => {
        setSelectedComponent(id);
        editor?.setSelectedComponent(id);
    }

    const setInputState = (id: string, state: boolean) => {

    }
    
    return (
        <Box sx={{width:"100%", height: '100%', position:'relative'}}>
            <div id="drawflow-wrapper">
                <div id="drawflow"></div>
                {curcuitInputs.length === 0 &&
                    <CurcuitEditorInputs />
                }
                <CurcuitEditorComponents setEditorComponent={handleSelectedComponent}/>
            </div>
        </Box>
    );
}

export default CurcuitEditor;