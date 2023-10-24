import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Editor from './logic-sim/editor/Editor';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Editor />} />
      </Routes>
    </Router>
  );
}
