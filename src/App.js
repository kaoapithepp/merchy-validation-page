import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import Gender from './page/Gender';
import Prefer from './page/Prefer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gender" element={<Gender />} />
        <Route exact path="/prefer" element={<Prefer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
