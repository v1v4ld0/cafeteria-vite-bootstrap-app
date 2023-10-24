import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cardapio from './components/Cardapio';
import About from './components/About';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
