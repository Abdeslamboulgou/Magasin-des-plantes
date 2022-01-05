import React from "react"

//QuantitePlante est une tableau dont elles les propriétés nommées avec des mots-clés (1 ,2 , 3 )
const QuantitePlante = {
    1: 'little',
    2: 'moderately ',
    3: 'a lot'
}

// le composant CareEchel comporte les props echelValue et careType comme arguments

function CareEchel({ echelValue, careType }) {
    const range = [1, 2, 3]

    // ici j'utilise un ternaire pour afficher un emoji
    const echelType = careType === 'light' ? '☀️' : '💧'

    return (

        // chaque élément à l’intérieur d’un appel à map() a besoin d’une clé.

        <div
            onClick={() => alert(`this plant requires ${QuantitePlante[echelValue]} ${careType === "water" ? "watering" : "from light"}`)
            }>

            {range.map((rangeElement) =>

                 //toString() Une chaîne de caractères représentant l'objet.
                 // retourner null dans la condition où je ne veux rien afficher
                echelValue >= rangeElement ? <span key={rangeElement.toString()}>{echelType}</span> : null
            )

            }
        </div>
    )
}

export default CareEchel