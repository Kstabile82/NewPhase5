import React, { useState } from "react";

function Adminpage({ user, rescue, handleRemoveAdmin }) {
    const [viewedUsers, setViewedUsers] = useState([])
    const [clicked, setClicked] = useState("")
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
        .then((ur) => { 
            setViewedUsers(ur)
            setClicked("users")
            }
            ) 
       }
    // if(viewedUsers.length > 0) {
    //     viewedUsers.map(v => console.log(v.user.name))
    // }
  
return (
    <div>
    <button>Edit Rescue Information</button>
    <button>Edit Pets</button>
    <button onClick={handleUsers}>Edit Users</button>
    {clicked === "users" && viewedUsers.length > 0 ? viewedUsers.map(v => <div><p>{v.user.name}, {v.status}</p> {v.status === "Admin" ? 
    <button onClick={(e) => handleRemoveAdmin(e, v)}>Remove</button> : null} </div>): null}
    </div>

)
}
export default Adminpage;