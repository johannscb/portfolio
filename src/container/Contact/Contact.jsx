import React, { useRef, useState } from 'react';
import {AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import './Contact.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [formSent, setFormSent] = useState(false)

  const sendForm = ()=> (
    setFormSent(true)
  )

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qapo72v', 'template_5e69k0u', form.current, 'p6yXjk8b2pd2jEyzS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      sendForm()
  };

  
    
  

  return (
    <div className="app__contact" id='contact'>
        <motion.h1 
          whileInView={{ x: [200, 0]}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='app__contact-title'>
            Contact me
        </motion.h1>

        <div className="app__contact-container">
          <motion.div
            whileInView={{ scale:[1.1, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
           className="app__contact-info">
            <div>
              <motion.h3
                whileInView={{ x: [-200, 0] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                Email</motion.h3>
              <motion.p
                whileInView={{ x: [-200, 0], scale: [0.7, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                johannbleza10@gmail.com</motion.p>
            </div>
            <div>
              <motion.h3
                whileInView={{ x: [-200, 0] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >Phone</motion.h3>
              <motion.p
                whileInView={{ x: [-200, 0], scale: [0.7, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >+63 9693286947</motion.p>
            </div>
            <div className='app__contact-links'>
              <motion.a
                href='https://www.linkedin.com/'
                target='_blank'
                whileInView={{ x: [-200, 0], scale: [0.7, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <AiFillGithub/>
              </motion.a>
              <motion.a
                href='https://www.linkedin.com/'
                target='_blank'
                whileInView={{ x: [-200, 0], scale: [0.7, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <AiFillLinkedin/>
              </motion.a>
            </div>
          </motion.div>
          <motion.form
          whileInView={{ scale:[1.2, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onSubmit={sendEmail}
          ref={form}
          >
            <motion.input 
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              type="text" placeholder="Name"
              name="user_name"
              required
              />
            <motion.input 
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              type="email" placeholder="Email"
              name="user_email"
              required
              />
            <motion.textarea 
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              type="text" placeholder="Your message"
              name="message"
              required
              />
              <motion.div
                whileInView={{ y: [100, 0] }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className={!formSent? 'app__contact-button': 'app__contact-button sent'}
                >
                  <input type='submit' value={!formSent? 'Send Message' : 'Message Sent!'}/>
              </motion.div>
              
          </motion.form>
        </div>

      <motion.div
        whileInView={{ y: [200, 0], rotate: [180, 270] }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="app__contact-number">
        05
      </motion.div>
    </div>
  )
}

export default Contact