import { Route } from "react-router-dom";
import "./App.css";
import DialogContainer from "./components/Dialogs/DialogContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import ProfileConatainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <NavBar />
      <div className="content">
        <Route path="/dialogs" render={() => <DialogContainer />} />
        <Route path="/profile/:userid?" render={() => <ProfileConatainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
