import {Box, IconButton, InputBase, useTheme} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import IputBase from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';;
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import PauseIcon from '@mui/icons-material/Pause';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'; 

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    console.log(theme.palette.mode);

    return (
        <Box sx={{display:"flex", justifyContent:"space-between", padding:2}}>
            {/* ICONS */}
            <Box sx={{display: 'flex'}}>
                <IconButton>
                    <MenuOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PlayArrowOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PauseOutlinedIcon />
                </IconButton>
                <IconButton>
                    <StopOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SaveAsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
                {/* <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? 
                       ( <LightModeOutlinedIcon /> ) : ( <DarkModeOutlinedIcon /> )
                    }
                </IconButton> */}
            </Box>
            <Box sx={{position:'relative'}}>
                <span style={{position: 'absolute', bottom: 0, fontWeight: 600}}>Untitled</span>
            </Box>
            {/* SEARCH BAR */}
            <Box sx={{
                display: 'flex',
                bgcolor: colors.primary[400],
                borderRadius: '3px',
            }}>
                <InputBase sx={{ml: 2, flex: 1}} placeholder='Search'></InputBase>
                <IconButton type='button' sx={{p: 1, ml: 2}}>
                    <SearchIcon />
                </IconButton>
            </Box>
            
        </Box>
    )
}

export default Topbar;
