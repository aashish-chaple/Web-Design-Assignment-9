import React from 'react'
import Navbars from './Navbar'
import Content from './Content'
import './about.css'




function About(){
    return(
      <div>
      <Navbars/>
      <Content title="About" content="Northeastern University is a private research university with its main campus in Boston, Massachusetts. Established in 1898, it was founded by the Boston Young Men's Christian Association as an all-male institute before being incorporated as Northeastern College in 1916, gaining university status in 1922." Img="../../neu1.jpg"/>
      </div>

    )
}

export default About