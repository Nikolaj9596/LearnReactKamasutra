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
    massagesPage: {
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
    },
  },

  callsubscriber() {
    console.log("hei");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this.callsubscriber();
  },

  updateNewPost(newText) {
    this._state.profilePage.newPostText = newText;
    this.callsubscriber();
  },

  subscribe(observer) {
    this.callsubscriber = observer;
  },

  getState () {
    return this._state
  }
};

export default store;
