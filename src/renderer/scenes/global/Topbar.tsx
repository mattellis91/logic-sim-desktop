import {Box, IconButton, InputBase, useTheme} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import IputBase from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

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
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? 
                       ( <LightModeOutlinedIcon /> ) : ( <DarkModeOutlinedIcon /> )
                    }
                </IconButton>
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
