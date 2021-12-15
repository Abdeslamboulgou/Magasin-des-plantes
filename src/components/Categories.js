import React from "react";
import '../styles/Categories.css'


function Categories({ activeCategory, categories, AffichePlant }) {



  return (
    <div className='categories'>
      <select className='categories-select' value={activeCategory} onChange={(e) => AffichePlant(e.target.value)}>
        <option value="" selected="selected"> ... </option>
        {categories.map((categor, index) => (
          <option key={`${categor}-${index}`} value={categor}>{categor}</option>
        ))}
      </select>
      <button className="Reset-button" onClick={() => AffichePlant('')}>Reset </button>

    </div>
  )
}
export default Categories