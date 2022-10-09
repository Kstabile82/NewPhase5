import React, { useState } from "react"; 
import Rescuepage from "./Rescuepage";

function MyRescues({ user, rescue, setRescue, userRescues, setUserRescues, isAdmin, setIsAdmin, isGuest, setIsGuest }) { 
  const [userRescue, setUserRescue] = useState({}) 
  setIsAdmin(true)
  function handleClick(e, uR) {
    setUserRescue(uR)
    if (uR.status === "Admin"){
        setIsAdmin(true)
    }
    setRescue(uR.rescue)
        //    if(uR.status === "Admin"){
        //     setIsAdmin(true)
        //    }
        //    else if(uR.status === "Guest") {
        //     setIsGuest(true)
        //    }
        //     setClickedRescue(true)
        //     // setRescue(uR)
        }

//     function handleChangeStatus(e, h) {
//        e.preventDefault();
//        setNewStatus(e.target.value)
//     }

//     function handleDelete(h, e) {
//      e.preventDefault();
//         fetch(`/hikerhikes/${h.id}`, { 
//         method: 'DELETE'
//     })
//     setUserHikes(userHikes.filter(uH => uH.id !== h.id))
//   }
//   function handleSubmitStatus(h, e) {
//     e.preventDefault();
//     fetch(`/hikerhikes/${h.id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status: newStatus }),
//     })
//     .then((r) => r.json())
//     .then((updatedHikerHike) => {
//       let del = userHikes.find(uH => uH.id === updatedHikerHike.id)
//       let idx = userHikes.indexOf(del)
//       userHikes.splice(idx, 1, updatedHikerHike)
//       setUserHikes(userHikes)
//     })   
//  }
return (
    <div>
      <p>{user.name}'s Rescues:</p>
      {/* {userRescues.map(uR => <div onClick={(e) => handleClick(e, uR)}>{uR.rescue.name}</div> )} */}
      {userRescues.map(uR => <div onClick={(e) => handleClick(e, uR)}>{uR.rescue.name}</div> )}
      {/* {userRescue !== {} ? <Rescuepage isAdmin={userRescue.status} user={user} rescue={userRescue.rescue}/> : null} */}
      {rescue.name !== undefined ? 
      <div>
      <Rescuepage isAdmin={isAdmin} user={user} rescue={rescue} userRescue={userRescue}/> 
      <p>Status:{userRescue.status}</p> 
      </div> : null } 
   
    </div>
)
}
export default MyRescues; 