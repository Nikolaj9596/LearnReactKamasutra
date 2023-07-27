import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogContainer from "./components/Dialogs/DialogContainer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="dialogs" element={<DialogContainer />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
