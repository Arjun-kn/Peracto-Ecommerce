import React, { useEffect } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import logo from '../../Assets/Images/peracto-logo.png'
import "./Header.css"
import {useCart} from '../../context/cart'
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from '../../context/auth';


const Header = () => {
  const [cart]  = useCart()
  const {auth,setAuth} = useAuth()
  console.log(auth.user.firstName)


  useEffect(() => {
    const fetchUser = async()=> {
    const storedUser = localStorage.getItem('authUser');

    if (storedUser) {
   
      const parsedUser = JSON.parse(storedUser);
      setAuth({ isAuthenticated: true, user: parsedUser });
    }
  }
 fetchUser()
 localStorage.setItem('authUser', JSON.stringify(auth.user))
  // eslint-disable-next-line
  }, []);

  
  return (
    <div >
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img src={logo} className='image-logo' alt="logo" />
      
        <form className="d-flex mx-auto" role="search">
          <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <h5 className='login-user text-dark'><FaRegUserCircle/>{auth.user.firstName} {auth.user.lastName}</h5>
        <h3 className='me-5'><TiShoppingCart/><span className='counter'>{cart}</span></h3>

      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header
