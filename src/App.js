import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="content">
        <Routes>
          <Route
            path="dialogs"
            element={<Dialogs state={props.state.massagesPage} />}
          />
          <Route
            path="profile"
            element={
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
                updateNewPost={props.updateNewPost}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
