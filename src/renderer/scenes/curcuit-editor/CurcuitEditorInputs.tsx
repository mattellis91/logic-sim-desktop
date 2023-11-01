import { Box, List, ListItem, ListItemText, ListSubheader, Switch } from "@mui/material";
import { useState } from "react";

const CurcuitEditorInputs = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Box sx={{ml:2, position: 'absolute', left:0, top:0, textAlign:'left', mt:2, display:'flex', alignItems:'flex-end', flexDirection:'column'}}>
            <List 
                sx={{width: '100%', height:'100%', maxWidth:360, bgcolor: '#eee', borderRadius:1}}
            >
                <ListItem>
                    <ListItemText><strong>Input 1</strong></ListItemText>
                    <Switch
                        edge="end"
                        onChange={() => {setChecked(!checked)}}
                        checked={checked}
                    />
                </ListItem>
            </List>
        </Box>
    )
}

export default CurcuitEditorInputs;