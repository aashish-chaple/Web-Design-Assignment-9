import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



const handleSubmit =event => {
    console.log('handleSubmit ran');
    event.preventDefault(); 

    let data=JSON.stringify({
            email: email,
            password:password
          });
    axios.post('http://localhost:4000/user/login',data)
    .then(res=>{
    console.log(res);
    
    //window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
    })

    fetch("http://localhost:4000/user/login", {
  "method": "POST",
  "headers": {
    "x-rapidapi-host": "fairestdb.p.rapidapi.com",
    "x-rapidapi-key": "apikey",
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    email: email,
    password: password
  })
})
.then(response => {
    if(response.status===200){
    console.log(response);
    window.location.assign('http://localhost:3000/home');

    }
    else{
        alert("Unsuccessful");
    }

})
.catch(err => {
  console.log(err);

});
        
    console.log('email 👉️', email);
    console.log('password 👉️', password);
};



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <br /><br />
            <div id='card'>
            <Card style={{ width: '18rem'}}>
            <label for="email" style={{color: 'white'}}>Email:</label><br /><br />
                <input type="email" id="email" name="email" onChange={event => setEmail(event.target.value)} value={email} /><br /><br />
                <label for="password" style={{color: 'white'}}>Password:</label><br /><br />
                <input type="password" id="password" name="password"  onChange={event => setPassword(event.target.value)}
          value={password}/><br /><br />
                <input type="submit" id="submit" name="submit" />
            </Card>
            </div>
            </form>
        </div>
    )
}

export default Login