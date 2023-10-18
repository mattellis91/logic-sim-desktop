import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Drawflow from 'drawflow';
import { useEffect } from 'react';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
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
