import React, {useState} from 'react'
import { HiOutlineMenuAlt4 }  from 'react-icons/hi'
import './Navbar.scss'

import {motion} from 'framer-motion'

const Navbar = () => {

  const [toggle, setToggle] = useState('app__navbar')

  const toggleMenu = () => {
    toggle === 'app__navbar' ? setToggle('app__navbar active') : setToggle('app__navbar')
  }


  return (
    <nav
      className={toggle}>  
        <div className="app__navbar-logo">
            Johann<span>.dev</span>
        </div>
        <ul className='app__navbar-links'>
            {['home','about','projects','skills','contact'].map((item)=>
            <motion.li
                key={`#${item}`}
                onClick={() => (setToggle('app__navbar'))}
                whileHover={{ scale: 1.2}}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                <a href={`#${item}`}>
                  {item}
                </a>
            </motion.li>
            )}
        </ul>
        <motion.div
          className='app__navbar-menu-button'>
            <div
              onClick={toggleMenu}
            >
              <HiOutlineMenuAlt4/>
            </div>
        </motion.div>
    </nav>
  )
}

export default Navbar