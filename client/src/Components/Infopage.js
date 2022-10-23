import React, { useState } from "react"; 

function Infopage({ rescue, user, setShowInfo }){
   const [showQuiz, setShowQuiz] = useState()
   const [info, setInfo] = useState()

  function handleClose(e) {
    e.preventDefault();
    setShowInfo(false)
  }
  function handleClickInfo(rIm, e) {
    console.log(rIm.text)
  }
return (
        <div>
             {rescue.informationmethod.map(rIm => <div key={rIm.id}><h3 onClick={(e) => handleClickInfo(rIm, e)}>{rIm.title}</h3></div>) } 
             <button onClick={handleClose}>Close</button>

        </div>
    )
}
export default Infopage; 