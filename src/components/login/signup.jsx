import React, {useState} from 'react';
import "./login.css"


const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')


  const resetForm = () => {
    setUsername("")
    setPassword('')
    setConfirm('')
  }

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    const feedback = {
      username,
      password,
      confirm
    }
    //send request
    console.log(feedback)
    resetForm()
  }

  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-section-wrap grid grid-cols-12 gap-24">
          <div className="the-title text-left col-span-9 sm:col-span-12 res:col-span-12">
            <div className="contact-title">
              <h5 className="head-title-2 text-white">
                <span style={{color: "red"}}>/ Signup</span>
              </h5>
              <h2 className="head-title-1">
                Please Signup
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
                <input type="text" name="password" size="40" onChange={(e) => setPassword(e.target.value)} value={password}
                       placeholder="Password"/>
              </label>
              <label>
                <input type="text" name="confirm" size="40" onChange={(e) => setConfirm(e.target.value)} value={confirm}
                       placeholder="Confirm"/>
              </label>
              
              <label>
                <input type="submit" value="Sign up" className="button-basic-1"/>
              </label>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
