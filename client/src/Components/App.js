import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import AllRescues from "./AllRescues";
import MyRescues from "./MyRescues";
import NewRescue from "./NewRescue";

function App() {
  const [user, setUser] = useState(null);
  const [loggedOut, setLoggedOut] = useState(true);
  const [rescues, setRescues] = useState([])
  // const [admin, setAdmin] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          setLoggedOut(false)
        })
      }
    })
  }, []);

  //fetch rescues

  function handleLogIn(user) {
    setUser(user);
    setLoggedOut(false)
  }
  function handleLogout() {
    setUser(null);
    setLoggedOut(true)
  }
  return (
    <div className="App">
      <h1 className="Hello">Pawsitive Pets</h1>
    <NavBar user={user} onLogout={handleLogout} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
    <Switch>
      <Route exact path="/login">
        <LogIn handleLogIn={handleLogIn} handleLogout={handleLogout} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
      </Route>
      <Route exact path="/signup">
        <SignUp handleLogIn={handleLogIn} handleLogout={handleLogout} onLogout={handleLogout} user={user} setUser={setUser} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
      </Route>
      {user && !loggedOut ? 
      <Route exact path="/welcome">
       <Welcome user={user} handleLogout={handleLogout} />
       </Route> : null} 
       {user && !loggedOut ? 
       <Route exact path="/myrescues">
        <MyRescues user={user} />
        </Route>  : null} 
        {user && !loggedOut ? 
          <Route exact path="/allrescues">
         <AllRescues user={user} handleLogout={handleLogout} />
         </Route> : null} 
         {user && !loggedOut ? 
          <Route exact path="/newrescue">
          <NewRescue user={user} setRescues={setRescues} rescues={rescues} />
          </Route> 
       : null} 
    </Switch>
  </div>
  );
}

export default App;
