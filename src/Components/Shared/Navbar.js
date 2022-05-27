import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';



const Navbar = () => {


  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to="/" className="navbar-brand fw-bolder text-success fs-3" href="#">Fruits WareHose</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link" aria-current="page">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/uploadproduct" className="nav-link" aria-current="page" >Upload Products</Link>
        </li>
      </ul>
      <span className="nav-item">
                  { user? <button onClick={logout} className="btn btn-info fw-bold ">SignOut</button> : <Link
                              className="  fw-bold"
                  to="/login"
                >
                  Login
                </Link>}
        </span>
    </div>
  </div>
</nav>
  )
}

export default Navbar