import React, {useState} from 'react';
import "./login.css"
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const resetForm = () => {
    setUsername("")
    setPassword('')
  }

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    const feedback = {
      username,
      password,
    }
    axios.post('/login', feedback)
    .then((requst) => {
      console.log(requst);
    })
    .catch( (error) => {
      console.log(error);
    });
    //send request
    // console.log(feedback)
    resetForm()
  }

  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-section-wrap grid grid-cols-12 gap-24">
          <div className="the-title text-left col-span-9 sm:col-span-12 res:col-span-12">
            <div className="contact-title">
              <h5 className="head-title-2 text-white">
                <span style={{color: "red"}}>/ Login</span>
              </h5>
              <h2 className="head-title-1">
                Please Login
              </h2>
            </div>
            {/*login form*/}
            <form className="contact-form-style" onSubmit={handleSubmit}>
              <label>
                <input type="text" name="your-name" size="40"
                       onChange={(e) => setUsername(e.target.value)}
                       value={username} placeholder="Username"/>
              </label>
              <label>
                <input type="password" name="password" size="40" onChange={(e) => setPassword(e.target.value)} value={password}
                       placeholder="Password"/>
              </label>
              
              <label>
                <input type="submit" value="Login" className="button-basic-1"/>
              </label>
              <a className='button-basic-1' href='/signup'>Sign Up</a>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
