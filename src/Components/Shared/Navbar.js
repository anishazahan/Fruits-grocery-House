import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';
import './Navbar.css'



const Navbar = () => {


  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
   <div className="navBack">
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <Link to="/" className=" fw-bolder logo fs-3 mr-5" href="#">Fruits WareHose</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="navlink " aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="navlink " aria-current="page">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="navlink" aria-current="page">Products</Link>
        </li>
       
        <li className="nav-item">
          <Link to="/about" className="navlink" aria-current="page" >About Us</Link>
        </li>
        
      </ul>
      <span className="nav-item">
                
                {user &&  <div class="dropdown">
          <button class="profile dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            { user?.displayName || "USER"}
          </button>
          <div class="dropdown-menu p-3 px-4" aria-labelledby="dropdownMenuButton">
         <ul className='text-decoration-none'>
           <li> <Link to="/manageProduct" className="navlink profile-list" aria-current="page" >ManageProducts</Link></li>
          <li>
          <Link to="/uploadproduct" className="navlink profile-list" aria-current="page" >UploadProducts</Link>
          </li>
          <li><Link to="/myitems" className="navlink profile-list " aria-current="page" >MyItems</Link></li>
          <li><button onClick={logout} className="btn signOut fw-bold mr-3 ">SignOut</button></li>
         </ul>
          
            
          </div>
        </div> }
                {!user &&  <Link
                              className="login  fw-bold"
                  to="/login"
                >
                  Login
                </Link>}
        </span>
    </div>
  </div>
</nav>
   </div>
  )
}

export default Navbar