import { combineReducers, createStore } from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";
import userReducer from "./user-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sitebar: sitebarReducer,
  usersPage: userReducer
})

let sotore = createStore(reducers);

export default sotore
