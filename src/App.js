import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;