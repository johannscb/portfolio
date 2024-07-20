import React from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const About = () => {
  return (
    <div className="app__about" id='about'>
      <motion.h1
        whileInView={{x: [-200,0,]}}
        transition={{ duration: 0.5, ease: 'easeInOut'}}
      className='app__about-title'
      >
      About me
      </motion.h1>
      <motion.div 
        className="app__about-content">

        <motion.p
          whileInView={{ x: [200, 0,], scale: [1.2,1] }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
          Hello, I am Johann Sealtiel C. Bleza and I am a full stack web developer currently based in the Philippines.  I learned to code through a coding bootcamp then worked my way from there. I genuinely enjoy coding as I love to create things and solve problems. For my works, I bring the best of both worlds in terms of functionality and great design.
        </motion.p>

        <div className='app__about-content-links'>
          <motion.a 
          href='https://www.linkedin.com/' 
          target='_blank'
          whileInView={{y: [200,0]}}
          whileHover={{scale:1.2}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          >
            <AiFillLinkedin />
          </motion.a> 
          <motion.a
          href='https://github.com/' 
          target='_blank'
          whileInView={{y: [200,0]}}
          whileHover={{scale:1.2}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          >
            <AiFillGithub />
          </motion.a> 
        </div>
      
      </motion.div>
      <motion.div
        whileInView={{ y: [200, 0], rotate: [180, 270] }}
        whileHover={{rotate:0}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="app__about-number">
          02
      </motion.div>
    </div>
  )
}

export default About