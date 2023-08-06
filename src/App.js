import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogContainer from "./components/Dialogs/DialogContainer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfileConatainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="dialogs/" element={<DialogContainer />} />
          <Route path="profile/" element={<ProfileConatainer />} />
          <Route path="users/" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
