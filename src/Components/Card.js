import React from "react";
import '../Styles/card.css'


const Card = (info) => {
  const { _highlightResult, Sku } = info.info
  const { Upc, Name } = _highlightResult


  console.log()


    return (
        <div key={Upc.value} className="card-container">
           <div>{Name.value}</div>
           {/* <img src= alt="Girl in a jacket" /> */}
           <div>Product ID</div>
           <div>Sku: {Sku}</div>

        </div>

      );



   
}

export default Card;