import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValueMail, setInputValueMail] = useState('pat your email here ')
  const [inputValueName ,setInputValueName ]= useState('pat your name here ')

	return (
		<footer className='lfooter' >
			<div className='footer-elem'>
                Contact us to find plants  🌿🌱🌵
			</div>
			<div className='footer-elem'>
                       
                        First name:
                        <input
                             onChange={handleInput}
                             value={inputValueName}
                             onBlur={(e) => checkValueName(e.target.value)}
                        />
                      <br/>
                    Email:
                        <input
                        onChange={handleInput}
                        value={inputValueMail}
                        onBlur={(e) => checkValueMail(e.target.value)}
                        />
            </div>
		</footer>
	)
    function checkValueMail() {
        if (!inputValueMail.includes('@')) {
              alert("attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
        }else
             { alert(`E-mail entrer est  : ${inputValueMail}`)
    }
    }
    function handleInput(e) {
            setInputValueMail(e.target.value)
        }
        function checkValueName() {
          if (!inputValueName.includes('@')) {
                alert("attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
          }else
               { alert(`E-mail entrer est  : ${inputValueName}`)
      }
      }
}

export default Footer