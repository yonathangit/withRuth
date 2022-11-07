import React from "react";
import './contactus.css';
const ContactForm = () => {
return( 
<form  className="form"
    //   action={FORM_ENDPOINT}
    //   onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
        <h1>Feel free to contact us!!</h1>
      <div className="">
        Full Name  <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="fullName"
          required
        />   
      </div>
      <br></br>
      <br></br>
      <div className="emailInput">
        Email  <input
          type="email"
          placeholder="Email"
          name="email"
          className="emailHolder"
          required
        />
      </div>
      <br></br>
      <br></br>
      <div className="messageInput">
        Message <textarea
          placeholder="Your message"
          name="message"
          className="textArea"
          required
        />
      </div>

      
      <div className="for-submit">
        <button className="btn" type="button">
         Submit
        </button>
      </div>
    </form>
    )
}
export default ContactForm;