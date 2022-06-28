import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Product from './Pages/Home/Product/Product';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
