import React, {useState} from 'react';
import "./Contact.css"


const Contact = () => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const resetForm = () => {
    setName("")
    setTitle('')
    setContent('')
  }

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    const feedback = {
      name,
      title,
      content
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
                <span style={{color: "red"}}>/ CONTACTUS</span>
              </h5>
              <h2 className="head-title-1">
                Please give us feedback
              </h2>
              <p className="dugem-text">
                Please take a moment to review your experience with us.Your feed back not only help us,it helps other
                potential customers.
              </p>
            </div>
            {/*feedback form*/}
            <form className="contact-form-style" onSubmit={handleSubmit}>
              <label>
                <input type="text" name="your-name" size="40"
                       onChange={(e) => setName(e.target.value)}
                       value={name} placeholder="Your Name"/>
              </label>
              <label>
                <input type="text" name="title" size="40" onChange={(e) => setTitle(e.target.value)} value={title}
                       placeholder="Title"/>
              </label>
              <label>
                <textarea name="Content" cols="40" rows="10"
                          onChange={(e) => setContent(e.target.value)}
                          value={content} placeholder="Content"/>
              </label>
              <label>
                <input type="submit" value="Send" className="button-basic-1"/>
              </label>

            </form>
          </div>
          <div className="title-side col-span-3 sm:col-span-12 res:col-span-12">
            <div className="block-location">
              <div className="dugem-text clearfix">
                <h3 className="text-white">Our Location</h3>
                <p>401 West Georgia, 6th Floor, Vancouver, BC V6B 5A1</p>
                <p>+1 (888) 569-6898</p>
              </div>

            </div>
            <div className="block-location">
              <div className="dugem-text clearfix">
                <h3 className="text-white">Contact</h3>
                <p>github.com/wyc6990906</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
