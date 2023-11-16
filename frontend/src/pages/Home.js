import React from 'react'
import Navbars from './Navbar';
import Content from './Content';


function Home(){
    return(
        <div>
        <Navbars/>
        <Content title="Northeastern University" content="This is the home page of one of the presitigous universities in the world. Admissions are now open for Spring 2024 and Fall 2024." Img="../../main_logo.jfif"/>
        </div>
        )
}

export default Home