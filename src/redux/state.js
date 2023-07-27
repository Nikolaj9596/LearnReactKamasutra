import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi this if my first post", likesCount: 11 },
        { id: 1, message: "Hi this if my second post", likesCount: 9 },
        { id: 1, message: "Hi this if my three post", likesCount: 0 },
        { id: 1, message: "Hi this if my four post", likesCount: 88 },
      ],
      newPostText: "it hello",
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Nikolaj" },
        { id: 2, name: "Nidskfk" },
        { id: 3, name: "Max" },
        { id: 4, name: "Dic" },
      ],

      messagesData: [
        { id: 1, text: "Hi" },
        { id: 2, text: "No" },
        { id: 3, text: "Why" },
        { id: 4, text: "NO" },
      ],

      newMessageBody: "it hello",
    },
    sitebar: {},
  },

  callsubscriber() {
    console.log("hei");
  },

  subscribe(observer) {
    this.callsubscriber = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this._state.sitebar = sitebarReducer(this._state.sitebar, action);
    this.callsubscriber();
  },
};


export default store;
