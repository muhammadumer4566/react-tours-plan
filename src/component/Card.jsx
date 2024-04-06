import React, { useState } from 'react'

function Card({ image, info, name, price, id, removeTour }) {
  
  const [readmore, setreadMore] = useState(false);
  const discription = readmore ? info : `${info.substring(0,200)}...`

  const readmoreHandler = () => {
    setreadMore (!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt="" />

         <div className="tourInfo">
          <div className="tourDetails">
            <h4 className="tourPrice"> {price} </h4>
            <h4 className="tourName"> {name} </h4>
          </div>

          <div className="description">
            {discription}
            <span className="readMore" onClick={readmoreHandler}>
              {readmore ? `Show Less`: `Read More`}
            </span>
          </div>
         </div>
            <button className="btnRed" onClick={ () => removeTour(id)}>
              Not Interested
            </button>
    </div>
  )
}

export default Card
