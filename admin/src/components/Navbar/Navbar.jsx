// import React from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <img className='logo' src={assets.logo} alt="" />
//       {/* <h2 className="logo">SwadCart.</h2> */}
//       <img className='profile' src={assets.profile_image} alt="" />
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
      <h2 className="logo">SwadCart.</h2>
      <p className="admin-text">Admin Panel</p>
      </div>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
