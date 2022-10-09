import React from "react";

function Rescuepage({ user, rescue, isAdmin, setIsAdmin, userRescue }) {
    // user.userrescues.map(uR => {
    //     if(uR.rescue.id === rescue.id && uR.status === "Admin"){
    //         setIsAdmin(true)
    //     } })
return (
    <div>
    <h3>{rescue.name}</h3> 
    {userRescue && userRescue.status === "Admin" ? <div><button>Edit Rescue Information</button>
    <button>Edit Pets</button>
    <button>Edit Admins</button>
    </div> : null} 
    {!userRescue || userRescue.status === "Guest" && rescue.name !== undefined ? <div><button>Rescue Information</button> <button>Pets</button> </div>: null} 
    </div>

)
}
export default Rescuepage;