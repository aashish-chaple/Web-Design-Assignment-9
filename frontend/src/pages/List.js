import React from 'react'
import './list.css'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader
  } from 'mdb-react-ui-kit';


function List(props){
    return(
      <div id="list-item">
          <MDBCard alignment='center'>
      <MDBCardHeader>{props.id}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>Phone: {props.contact}</MDBCardText>
        <MDBCardText>Email: {props.email}</MDBCardText>
        <MDBCardText><a href="https://www.linkedin.com/in/aashish-chaple/">{props.linkedin}</a></MDBCardText>
      </MDBCardBody>
    </MDBCard>
      </div>
    )
}

export default List