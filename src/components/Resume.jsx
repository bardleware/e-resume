import React from 'react'
import { relevantExperience as exp } from '../data/resume'

const Experience = () => {
  return exp.map(ex => (
    <div className='experience'>
      <h2>{ex.where} </h2>
      <h5>{ex.howLong}</h5>
      {ex.positions.map(position => (
        <div>
          <h3>{position.title}</h3>
          <div>
            {'Technologies: '.concat(position.technologies)}
          </div>
          <ul>
            {position.duties.map(duty => <li>{duty}</li>)}
          </ul>
        </div>
      ))}
    </div>
  ))
}
const Resume = () => (
  <div className='resume'>
    <div className='section'>
      <h2>Experience</h2>
      <Experience />
    </div>
    <div className='section'>
      <h2>Education</h2>
    </div>
    <div className='section'>
      <h2>Skills</h2>
    </div>
    <div className='section'>
      <h2>sec 1</h2>
    </div>
    <div className='section'>
      <h2>sec 2</h2>
    </div>
    <div className='section'>
      <h2>sec 3</h2>
    </div>
    RESUME
  </div>
)

export default Resume
