import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import Gender from './page/Gender';
import Prefer from './page/Prefer';
import Completed from './page/Completed';
import Claimed from './page/Claimed';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gender" element={<Gender />} />
        <Route exact path="/prefer" element={<Prefer />} />
        <Route exact path="/completed" element={<Completed />} />
        <Route exact path="/claimed" element={<Claimed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
