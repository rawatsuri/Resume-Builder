import React from 'react'
import img from '../Images/resume.svg'
import './header.css'
import {useNavigate } from 'react-router-dom'

const Header = () => {

  const history = useNavigate();

  const nextPage = () => {
    history.push("/input");
  }

  return (
    <>
         <div className="main">
            <div className="main-container">
                <div className="main-description">
                    <h1>Easy and Free Online Resume Builder</h1>
                    <p>Create your resume in minutes</p>
                    <button onClick={nextPage}> Create Resume</button>
                </div>
                <div className="img-container">
                    <img src={img} alt="Resume Builder"/>
                </div>
            </div>  
                       
        </div>
    </>
  )
}

export default Header