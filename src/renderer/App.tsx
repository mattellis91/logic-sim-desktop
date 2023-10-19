import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Drawflow from 'drawflow';
import { useEffect } from 'react';

function Hello() {
  return (
    <div id="drawflow-wrapper">
      <div id="drawflow" />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const id = document.getElementById('drawflow');
    const editor = new Drawflow(id as HTMLElement);
    editor.start();
    const html = `
    <div><input type="text" df-name></div>
    `;
    const data = { name: '' };
    editor.addNode('github', 0, 1, 150, 300, 'github', data, html, false);
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
