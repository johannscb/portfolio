import React from 'react'
import './Projects.scss'
import { AiFillGithub } from 'react-icons/ai';
import { TbView360 } from 'react-icons/tb'
import {easeInOut, motion} from 'framer-motion'
import images from '../../constants/images'

const projectsData = [
  {
    "title": "CryptoWatcherr",
    "desc": "Crypto Currency coin watcher.Crypto Currency coin watcher.Crypto Currency coin watcher.Crypto Currency coin watcherrr",
    "tags": ["MongoDB", "Express.js", "React", "Node", "SASS"],
    "img": images.about02,
    "github": "https://github.com/",
    "link": "https://github.com/"

  },
  {
    "title": "Netflix Clone",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fugiat rem soluta dolor minus maiores pariatur a, earum corporis repudiandae.",
    "tags": ["HTML", "CSS", "Javascript"],
    "img": images.about01,
    "github": "https://github.com/",
    "link": "https://github.com/"
  },
  {
    "title": "Netflix Clone2",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fugiat rem soluta dolor minus maiores pariatur a, earum corporis repudiandae.",
    "tags": ["HTML", "CSS", "Javascript"],
    "img": images.about04,
    "github": "https://github.com/",
    "link": "https://github.com/"
  },
  {
    "title": "Netflix Clon3",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fugiat rem soluta dolor minus maiores pariatur a, earum corporis repudiandae.",
    "tags": ["HTML", "CSS", "Javascript"],
    "img": images.about01,
    "github": "https://github.com/",
    "link": "https://github.com/"
  },
  {
    "title": "CryptoWatcherr2",
    "desc": "Crypto Currency coin watcher.Crypto Currency coin watcher.Crypto Currency coin watcher.Crypto Currency coin watcherrr",
    "tags": ["MongoDB", "Express.js", "React", "Node", "SASS"],
    "img": images.about02,
    "github": "https://github.com/",
    "link": "https://github.com/"

  },
  {
    "title": "Netflix Clone5",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fugiat rem soluta dolor minus maiores pariatur a, earum corporis repudiandae.",
    "tags": ["HTML", "CSS", "Javascript"],
    "img": images.about03,
    "github": "https://github.com/",
    "link": "https://github.com/"
  }
]



const Projects = () => {
  return (
    <div className="app__projects" id='projects'>
        <motion.h1
        whileInView={{x: [200,0]}}
        transition={{duration:0.5, ease: easeInOut}}
        className='app__projects-title'>
          Projects {`(${projectsData.length})`}
        </motion.h1>
        <div className="app__projects-container">
          {projectsData.map((project,index)=>((
            <motion.div
              key={project.title}
              whileInView={{ y: [100, 0], scale: [0.7, 1] }}
              transition={{ duration: 0.5, ease: easeInOut }}
              >
              <div className="app__projects-card">
              <div className="app__projects-image-container">
                <div>
                  <motion.a
                  href={project.link}
                  target='_blank'
                  whileHover={{scale: 1.2}}
                  transition={{ duration: 0.5, ease: easeInOut }}
                  >< TbView360/></motion.a>
                  <motion.a
                  href={project.link}
                  target='_blank'
                  whileHover={{scale: 1.2}}
                  transition={{ duration: 0.5, ease: easeInOut }}
                  ><AiFillGithub/></motion.a>
                </div>
                <img src={project.img} alt={project.img}/>
              </div>
              <div className="app__projects-card-info">
                <div className="app__project-card-title">{project.title}</div>
                <div className="app__project-card-desc">
                  {project.desc}
                </div>
                <div className="app__project-card-tags">
                  {project.tags.map((tag,index)=>(
                    <div key={tag}>{tag} </div>
                  ))}
                </div>
              </div>

            </div>

            </motion.div>
          )))}
        </div>

      <motion.div
        whileInView={{ y: [200, 0], rotate: [180, 270] }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="app__projects-number">
        03
      </motion.div>
    </div>
  )
}

export default Projects