import React, { useState } from "react";
import Welcome from "./Welcome";

function SignUp({ user, handleLogIn, loggedOut, setLoggedOut, handleLogout }) {
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

    function handleNewUser(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userName,
            password,
            password_confirmation: confirmPassword
                  }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => handleLogIn(user));
          } else {
            r.json().then((err) => console.log(err.errors));
          }
        });
    }
return (
    <div>
    <form className="signup" onSubmit={handleNewUser}>  
     <input 
        type="text" 
        id="username" 
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}></input>  
         <input 
        type="text" 
        id="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}></input> 
         <input 
        type="text" 
        id="confirmpassword" 
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}></input>   
        <button>Enter</button>
    </form>
     {user ? <Welcome user={user} loggedOut={loggedOut} setLoggedOut={setLoggedOut} handleLogout={handleLogout} /> : null } 
</div>
)
}
export default SignUp;