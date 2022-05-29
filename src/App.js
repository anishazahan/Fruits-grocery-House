
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import SignUP from './Components/Login/SignUP';
import Update from './Components/Product/Update';
import Product from './Components/Product/Product';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import UploadProduct from './Components/UploadProduct/UploadProduct';


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/purchase/:id" element={<Update/>} />
        <Route path="/uploadproduct" element={<RequireAuth><UploadProduct/></RequireAuth>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUP/>} />
     </Routes>
     <Footer></Footer>
     
      
    </div>
  );
}

export default App;
