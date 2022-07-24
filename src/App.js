import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProductCreate from './Pages/Dashboard/ProductCreate';
import ProductUpdate from './Pages/Dashboard/ProductUpdate';
import ProductDelete from './Pages/Dashboard/ProductDelete';
import ProductList from './Pages/Dashboard/ProductList';
import CategoryCreate from './Pages/Dashboard/CategoryCreate';
import CategoryDelete from './Pages/Dashboard/CategoryDelete';
import CategoryUpdate from './Pages/Dashboard/CategoryUpdate';
import CategoryNewItem from './Pages/Dashboard/CategoryNewItem';
import CategoryList from './Pages/Dashboard/CategoryList';
import MyProfile from './Pages/Dashboard/MyProfile';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path='productCreate' element={<ProductCreate />} />
          <Route path='productUpdate' element={<ProductUpdate />} />
          <Route path='productDelete' element={<ProductDelete />} />
          <Route path='productList' element={<ProductList />} />
          <Route path='categoryCreate' element={<CategoryCreate />} />
          <Route path='categoryDelete' element={<CategoryDelete />} />
          <Route path='categoryUpdate' element={<CategoryUpdate />} />
          <Route path='categoryNewItem' element={<CategoryNewItem />} />
          <Route path='categoryList' element={<CategoryList />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
