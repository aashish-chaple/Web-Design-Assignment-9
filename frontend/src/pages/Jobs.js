import React from 'react'
import Navbars from '../pages/Navbar'
import Content from './Content'

function Jobs(){
    return(
      <div>
      <Navbars/>
      <Content title="Web Design Spring 2024 TA" content="Get a chance to be a Teaching Assistant for one of the most helpful courses of the program under the guidance of Senior Professor, where you will be responsible for assisting professor in teaching the students more efficiently."/>
      <Content title="Web Design Spring 2024 RA" content="Get a chance to be a Research Assistant under the guidance of Senior Professor, where you will be responsible for assisting professor in studying and researching one of the innovating technologies used for web development."/>
      </div>
    )
}

export default Jobs