import React from "react";
import ListUser from "./Components/ListUser";
import UserForm from "./Components/UserForm";

function App() {
  const [user, setUser] = React.useState([]);
  return (
    <div className="App">
      <UserForm setUser={setUser}/>
      {user.length !== 0 && <ListUser user={user} setUser={setUser}/>}
    </div>
  );
}

export default App;
