import './App.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar  from './scenes/global/Topbar';
import CurcuitEditor from './scenes/CurcuitEditor';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from 'react-pro-sidebar';

export default function App() {
  const [theme, colorMode] = useMode();
  console.log(theme.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className='app'>
          <main className='content'>
            <Topbar />
            <Router>
              <Routes>
                <Route path='/' element={<CurcuitEditor />} />
              </Routes>
            </Router>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
