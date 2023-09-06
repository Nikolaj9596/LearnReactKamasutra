import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";
import userReducer from "./user-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sitebar: sitebarReducer,
  usersPage: userReducer,
  auth: authReducer
})

let sotore = createStore(reducers, applyMiddleware(thunkMiddleware));

export default sotore
