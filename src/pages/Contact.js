import React ,{useState} from 'react';
import Banner from '../components/Banner';
import CopyToClipboard from 'react-copy-to-clipboard';
import Footer from '../components/Footer';
import contact from '../assets/contact.jpg'
import emailjs from "emailjs-com";
import '../styles/contact.css'

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };
  
    const failMessage =(msg) =>{
      let formMess = document.querySelector(".formMessage");
       
      formMess.innerHTML= msg
      formMess.style.opacity='1'
      formMess.style.background ='rgb(253,87,87)'
  
      document.getElementById('name').classList.add('error')
      document.getElementById('email').classList.add('error')
      document.getElementById('message').classList.add('error')
  
    }
  
    const successMessage =() =>{
      let formMess = document.querySelector('.formMessage')
  
      formMess.innerHTML='Message sent! we will get back to you as soon as possible.'
      formMess.style.background='#00c1ec'
      formMess.style.opacity='1'
  
      document.getElementById('name').classList.remove('error')
      document.getElementById('email').classList.remove('error')
      document.getElementById('message').classList.remove('error')
      
      setTimeout(() => {
        formMess.style.opacity='0'
      },5000)
  
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (name && isEmail() && message) {
        sendFeedback("template_5w4hhjm", {
          name,
          email,
          message,
        })
      }else {
        failMessage('Please complete  correctly the required fields * ')
      }
    }
    const sendFeedback =(templateId,variables) =>{
      window
      .emailjs.send("gmail",templateId,variables)
              .then((res) => {
              successMessage()
              setName("");
              setEmail("");
              setMessage("");
            }).catch((err) => {
                failMessage("An error has occurred, please try again.")
            });
      } 
  
    return (
        <div className='container' >
            <Banner/>

    <form className="contact-form">
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="name *"
          value={name}
        />
        <div className="email-content">
          <label id="not-mail">Invalid email</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>
      <div >
      <input
        className="buttonForm"
        type="submit"
        value="Send"
        onClick={(e) => handleSubmit(e)}
      />
      <div className="formMessage"></div>
      </div>
    </form>
  <div>
    <img src={contact} alt='contact' className='img-contact'/>
  </div>
    <div className="contact-infos">
                   <div className="content">
                   <i style={{cursor:'pointer'}}  class="fas fa-home"></i>
                     <h4>adress</h4>
                     <CopyToClipboard text="174 rue michel ange" className="hover">
                        <p style={{cursor : 'pointer'}} className="clipboard" onClick={() => {
                            alert("Adress copy !!")
                        }}>174 rue Michel Ange , 62100 Calais </p>
                    </CopyToClipboard>
                   </div>
                <div className="content">
                <i style={{cursor : 'pointer'}} class="fas fa-phone"></i>
                    <h4>Telephone </h4>
                    <CopyToClipboard text="07 49 64 58 09" className="hover">
                        <p style={{cursor : 'pointer'}} className="clipboard" onClick={() => {
                            alert("phone copy !!")
                        }}>07 49 64 58 09</p>
                    </CopyToClipboard>
                </div>
                <div>
                <i style={{cursor : 'pointer'}}  class="fas fa-envelope-open-text"></i>
                  <h4>Email</h4>
                  <CopyToClipboard text='boulgouslam@gmail.com' className='hover'>
                    <p style={{cursor:'pointer'}} className='clipboard' onClick={() => {
                      alert("Email copy !!")
                    }}>boulgouslam@gmail.com</p>

                  </CopyToClipboard>
                </div>
            </div>
            <br/>
            <hr/>
            <Footer/>
            
            </div>

       
    );
}

export default Contact;


