import React from 'react'
import "./Menu.css"
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { GiEgyptianProfile } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";
import {Link,useNavigate} from 'react-router-dom'

const Menu = () => {
  let navigate = useNavigate()

  let removeToken = ()=>{
    localStorage.removeItem('authUser')
    navigate("/")
  }
  return (
    <div className='menu'>
    <div className='d-flex flex-column m-4 gap-5 mt-5'>
    <div className='d-flex icons' onClick={()=>navigate("/home")}>
    <h5 ><AiTwotoneHome className='i'/></h5>
    <span>Home</span>
   
    </div>

    <div className="dropdown icons ">
          
          <div className=" dropdown-toggle d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <div className='d-flex icons ' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <h5><MdOutlineCategory /></h5>
          <span>Category</span>
        </div>
        </div>

          <div className="dropdown-menu  mobile"  >
            <Link className="dropdown-item" to="/category/smartphones">Smartphones</Link>
            <Link className="dropdown-item" to="/category/laptops">Laptops</Link>
            <Link className="dropdown-item" to="/category/skincare">Skincare</Link>
            <Link className="dropdown-item" to="/category/fragrances">Perfume</Link>
            <Link className="dropdown-item" to="/category/home-decoration">Home-Decoration</Link>
            <Link className="dropdown-item" to="/category/groceries">Groceries</Link>
            
          </div>
        </div>

   
   
    </div>
    <div className='d-flex icons exicon' onClick={()=>navigate("/profile")}>
    <h5 ><GiEgyptianProfile/></h5>
    <span  >My Profile</span>
   
    </div>
    <div className='d-flex icons exicon' onClick={removeToken} >
    <h5  ><BiLogOutCircle/></h5>
    <span >Logout</span>
   
    </div>
    
    </div>
    
      
 
  )
}

export default Menu
