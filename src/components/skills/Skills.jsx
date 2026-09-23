import React from 'react'
import './skills.css'
import Professional from './Professional'
import Tools from './Tools'
import Database from './Database'
import Environment from './Environment'
import { useLanguage } from '../../context/LanguageContext'

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">{t.skills.title}</h2>
        <span className="section__subtitle">{t.skills.subtitle}</span>
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