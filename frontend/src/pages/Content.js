import React from 'react'
import Card from 'react-bootstrap/Card';
import './Content.css'


function Content(props){
    return(
      <div id="card">
       <Card style={{ width: '24rem' }}>
       <a href='https://www.northeastern.edu/'><Card.Img variant="top" src={props.Img} /></a>
      <Card.Body>
        <Card.Title style={{"font-weight":"bold"}}>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
        )
}

export default Content