import { useState} from 'react'
import '../styles/Footer.css'

function Footer(props) {
	const [inputValueMail, setInputValueMail] = useState('')
  const [inputValueName ,setInputValueName ]= useState('')
  const confirmation=`votre demande est enregistrée sous l'identifiant :\nE-mail : ${inputValueMail} \nName: ${inputValueName}  \n `
	return (
		<footer className='lfooter' >
			<div className='footer-elem'>
                Contact us to find plants  🌿🌱🌵
			</div>
			<div className='footer-elem'>
                       
                        First name:
                        <input className="first-name"
                            placeholder="Your name "
                             onChange={handleInputName}
                             value={inputValueName}
                             
                        />
                      <br/>
                    Email:
                        <input className="email"
                        placeholder="your Email "
                        onChange={handleInputmail}
                        value={inputValueMail}
                        />
            </div>
            <button className="send-inf" onClick={(e) => checkValueMail(e.target.value)}> Send </button>

		</footer>
	)
    function checkValueMail() {

       if (!inputValueMail.includes('@')) {
              alert("attention, there is no @, this is not a valid address ")
        }else if(window.confirm(confirmation)){
          if (inputValueName!==" " && inputValueName!=="" ){
             { alert(`Your order is Registered \n\nyou will pay in total : ${props.total} $ \n\n\nthank you for your trust`)
        }
       }else{
              alert("You should entred your name !")
       }
      } else{
          alert(" your request canceled ")
        }
      }
    
    function handleInputmail(e) {
            setInputValueMail(e.target.value)
        }
        function handleInputName(e) {
            setInputValueName(e.target.value)

        }
        
}

export default Footer