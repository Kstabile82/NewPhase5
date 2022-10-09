import React from "react";

function Rescuepage({ user, rescue, isAdmin, setIsAdmin, userRescue }) {
    // user.userrescues.map(uR => {
    //     if(uR.rescue.id === rescue.id && uR.status === "Admin"){
    //         setIsAdmin(true)
    //     } })
return (
    <div>
    <h3>{rescue.name}</h3> 
    {/* {user && !isAdmin ? <button>Save to My Rescues</button>:null} */}
    {isAdmin ? <p>Status: {userRescue.status}</p> : null }
    </div>

)
}
export default Rescuepage;