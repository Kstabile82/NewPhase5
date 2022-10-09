import React from "react";

function Rescuepage({ user, rescue, isAdmin, setIsAdmin }) {
    // user.userrescues.map(uR => {
    //     if(uR.rescue.id === rescue.id && uR.status === "Admin"){
    //         setIsAdmin(true)
    //     } })
    console.log(isAdmin)
return (
    <div>
    {/* <h3>{rescue.name}</h3>  */}
    {user && !isAdmin ? <button>Save to My Rescues</button>:null}
    {isAdmin ? <p>Status: Admin</p> : null }
    </div>

)
}
export default Rescuepage;