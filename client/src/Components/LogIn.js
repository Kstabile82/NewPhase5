import React, { useState } from "react";

function LogIn({ handleLogIn, loggedOut, handleLogout }) {
const [inputName, setInputName] = useState("")
const [inputPassword, setInputPassword] = useState("")

  function handleUser(e) {
       e.preventDefault();
       fetch("/login", {
           method: "POST", 
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({ name: inputName, password: inputPassword }),
       })
    .then((r) => {
        if (r.ok) {
          r.json()
          .then((u) => {
            handleLogIn(u)
          })
        }
      });
  }

    return (
        <div>
            {loggedOut ? 
            <form className="login" onSubmit={handleUser}>  
             <input 
                type="text" 
                id="inputname" 
                placeholder="Username"
                onChange={(e) => setInputName(e.target.value)}></input>  
                 <input 
                type="text" 
                id="password" 
                placeholder="Password"
                onChange={(e) => setInputPassword(e.target.value)}></input>  
                <button>Enter</button>
            </form> : null }
        </div>
    )
}
export default LogIn; 