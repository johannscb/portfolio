import React from 'react'
import './Skills.scss'
import {motion} from 'framer-motion'
import images from '../../constants/images'



const skillsData = [
  {
    'title': 'html',
    'img': images.html
  },
  {
    'title': 'css',
    'img': images.css
  },
  {
    'title': 'javascript',
    'img': images.javascript
  },
  {
    'title': 'sass',
    'img': images.sass
  },
  {
    'title': 'react',
    'img': images.react
  },
  {
    'title': 'redux',
    'img': images.redux
  },
  {
    'title': 'typescript',
    'img': images.typescript
  },
  {
    'title': 'node',
    'img': images.node
  },
  {
    'title': 'mongodb',
    'img': images.mongodb
  },
  {
    'title': 'bootstrap',
    'img': images.bootstrap
  },
  {
    'title': 'python',
    'img': images.python
  },
  {
    'title': 'git',
    'img': images.git
  },
]

const experienceData = [
  {
    "title": "De La Salle University Dasmarinas",
    "subtitle": "BS Computer Engineer",
    "date": "2022-Present",
    "logo": images.dlsud
  },
  {
    "title": "Zuitt Coding Bootcamp",
    "subtitle": "Full Stack Web Development",
    "date": "2021-2022",
    "logo": images.zuitt
  },
  {
    "title": "Mapua University",
    "subtitle": "Senior High School, STEM",
    "date": "2018-2020",
    "logo": images.mapua
  },
]

const Skills = () => {
  return (
    <div className="app__skills" id='skills'>
      <motion.h1 
        whileInView={{x: [-200,0]}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="app__skills-title">
        Skills & Experience
      </motion.h1>

      <div className="app__skills-container">
        <div className="app__skills-img-container">
            {skillsData.map((skill) => (
              <motion.img
                whileInView={{ y: [100, 0], scale:[1.2, 0.9]}}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                src={skill.img} key={`#${skill}`} alt={`#${skill}`} 
                title={`${skill.title}`}
                />
                
            ))}
        </div>

        <div 
          className="app__skills-experience">
          {experienceData.map((item)=>(
          <motion.div 
          key={item.title}
          whileInView={{x:[200,0],scale:[0.7,1]}}
          transition={{duration: 0.5, ease: "easeInOut"}}
          className="app__skills-experience-item">
            <img src={item.logo} alt={item.logo}/>
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            <h4>{item.date}</h4>
          </motion.div>
          ))}

        </div>
      </div>
  
      <motion.div
        whileInView={{ y: [200, 0], rotate: [180, 270] }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="app__skills-number">
        04
      </motion.div>
    </div>
  )
}

export default Skills