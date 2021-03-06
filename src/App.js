
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
import ManageProducts from './Components/ManageProducts/ManageProducts';
import MyItems from './Components/ManageProducts/MyItems';
import About from './Components/Home/About';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/purchase/:id" element={<RequireAuth><Update/></RequireAuth>} />
        <Route path="/myitems" element={<RequireAuth><MyItems/></RequireAuth>} />
        <Route path="/manageProduct" element={<RequireAuth><ManageProducts/></RequireAuth>} />
        <Route path="/uploadproduct" element={<RequireAuth><UploadProduct/></RequireAuth>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUP/>} />
        <Route path="/*" element={<NotFound/>} />
     </Routes>

     <Footer></Footer>
     
      
    </div>
  );
}

export default App;
