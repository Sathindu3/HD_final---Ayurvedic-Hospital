
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Channeling from './Pages/Channeling/Channeling';
import Overview from './Pages/Overview/Overview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Treatment from './Pages/Treatment/Treatment';
import Products from './Pages/Products/Products';
import Footer from './Component/Footer/Footer';
import Packages from './Pages/Packages/Packages';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Overview/>} />
          <Route path='/channeling' element={<Channeling/>} />
          <Route path='/treatment' element={<Treatment/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/packages' element={<Packages/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
