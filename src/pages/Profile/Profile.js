import React from 'react'
import './Profile.css'
const Profile = () => {
    const storedUser = localStorage.getItem('authUser');
    const user = JSON.parse(storedUser); 
  console.log(user);
  return (
    <div className='profile'>
<div className='card user-pr'>
<h1 className='text-center'>User Information</h1>
<p>Name:{user.firstName} {user.lastName}</p>
<p>DOB:{user.birthDate}</p>
<p>Age:{user.age}</p>
<p>Gender:{user.gender}</p>
<p>Phone No:{user.phone}</p>


</div>
    </div>
  )
}

export default Profile
