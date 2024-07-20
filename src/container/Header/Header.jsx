import React from 'react'
import './Header.scss'
import images from '../../constants/images'
import { BsSendFill } from 'react-icons/bs'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <header id='home'>
        <motion.div 
          className='app__header-info'>
            <motion.h3
            whileInView={{x: [-100,0]}}
            transition={{ duration: 0.5, ease: 'easeInOut'}}
            >
              <span>//</span> Hello, I'm
            </motion.h3>
            <motion.h1
            whileInView={{x: [-200,0,], scale:1.1}}
            transition={{ duration: 0.5, ease: 'easeInOut'}}
            >Johann</motion.h1>
            <motion.h4
               whileInView={{x: [-200,0,], scale:1.1}}
              transition={{ duration: 0.5, ease: 'easeInOut'}}
              >Full-Stack Developer
            </motion.h4>
          <motion.div
          whileInView={{x: [-100,0],scale: [1.2,1]}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='app__header-button'
          >
            <a href='#contact'>
              Say Hello <BsSendFill />
            </a>
          </motion.div>
        </motion.div>

        <div className="app__header-profile">
          <motion.div 
          whileInView={{ y: [200, 0] }}
          whileHover={{ scaleY: 1.2 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='app__header-profile-box'/>
          <motion.img 
          whileInView={{ scale: [1.1, 1], x: [200,0] }}
          whileHover={{scale: 1.1}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src={images.profile}/>
        </div>
        <motion.div 
          whileInView={{ y: [200, 0], rotate: [180,270] }}
          whileHover={{rotate:0}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="app__header-number">01
        </motion.div>
    </header>
  )
}

export default Header