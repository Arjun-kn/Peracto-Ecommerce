import React from 'react'
import "./Footer.css"
const Footer = () => {
  const storedUser = localStorage.getItem('authUser');
  console.log(storedUser.user)
  return (
    <div className='text-center footer'>
      <h4>Copyright &copy; 2023, Percto Infotech. All Rights Reserved.</h4>
    </div>
  )
}

export default Footer
