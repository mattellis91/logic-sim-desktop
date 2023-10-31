import { Box, Button } from '@mui/material';
import { useEffect, useState } from "react";
import { LogicSim } from '../logic-sim/editor/logic-sim';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const CurcuitEditor = () => {

    const [editor, setEditor] = useState<LogicSim>();

    useEffect(() => {
        setEditor(new LogicSim('drawflow'));
    }, []);


    return (
        <Box sx={{width:"100%", height: '100%', position:'relative'}}>
            <div id="drawflow-wrapper">
                
                    <div id="drawflow"></div>
                
                <Box sx={{mr:2, position: 'absolute', right:0, top:0, textAlign:'right', mt:2}}>
                    <Button sx={{mb:1, display:'block'}} variant='contained'>Input</Button>
                    <Button sx={{mb:1, display:'block'}} variant='contained'>Output</Button>
                    <Button sx={{mb:1, display:'block'}} variant='contained'>Gates</Button>
                    <Button sx={{mb:1, display:'block'}} variant='contained'>Custom</Button>
                </Box>
            </div>
        </Box>
    );
}

export default CurcuitEditor;