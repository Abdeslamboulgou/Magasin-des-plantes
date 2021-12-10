import React, { useState } from "react";
import '../styles/layout.css'

function  QuestionForm() {
   /* const [inputValue, setInputValue] = useState("poser votre question ici ")
    return (
        <div className='lmj-layout-inner'>
                <textarea
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      // onChange={(e) => checkValue(e.target.value)}

                />
                <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>)

    //function  handleSubmit(e) {
    // j'utilise l'evenement preventDefault pour que la page ne reffraiche pas lorsque la fonction alerte afficher le nom que je tape sur la bare texte
    //e.preventDefault()
    //alert(e.target['my_input'].value)}

    // la fonction checkValue permet d'annuler a ecriver la lettre 'f' dans la valeur inserer
    //function checkValue(value) {
        //if (!value.includes('f')) {
           // setInputValue(value)
       // }}
    
    

}

export default QuestionForm