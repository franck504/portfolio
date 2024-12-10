import React from 'react'
import './skills.css'
import Professional from './Professional'
import Tools from './Tools'
import Database from './Database'
import Environment from './Environment'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="skills__container container grid">
            <Professional/>
            <Tools/>
            <Database/>
            <Environment/>

        </div>
    </section>
  )
}

export default Skills