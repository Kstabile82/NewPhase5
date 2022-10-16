import React from "react";
import Adminpage from "./Adminpage"

function Rescuepage({ user, rescue, isAdmin, setIsAdmin, userRescue, handleRemoveAdmin, handleAddAdmin }) {
    // user.userrescues.map(uR => {
    //     if(uR.rescue.id === rescue.id && uR.status === "Admin"){
    //         setIsAdmin(true)
    //     } })
    function handleUsers(e) {
        e.preventDefault();
        fetch(`/allusers`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rescue_id: parseInt(rescue.id), user_id: parseInt(user.id) }),
        })
        .then((r) => r.json())
        .then((ur) => console.log(ur))
       }
    function handleShowUserInfo(e) {
        e.preventDefault();
        console.log(rescue)
    }
return (
    <div>
    <h3>{rescue.name}</h3> 
    {userRescue && userRescue.status === "Admin" ? <Adminpage user={user} rescue={rescue} handleAddAdmin={handleAddAdmin} handleRemoveAdmin={handleRemoveAdmin} />
    : <div><button onClick={handleShowUserInfo}>Rescue Information</button> <button>Pets</button></div> }
    </div>
)
}
export default Rescuepage;