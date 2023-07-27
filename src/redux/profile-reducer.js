const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

let initialState = {
  postData: [
    { id: 1, message: "Hi this if my first post", likesCount: 11 },
    { id: 1, message: "Hi this if my second post", likesCount: 9 },
    { id: 1, message: "Hi this if my three post", likesCount: 0 },
    { id: 1, message: "Hi this if my four post", likesCount: 88 },
  ],
  newPostText: "it hello",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost],
      };
    }
    case UPDATE_NEW_POST: {
      return {...state, newPostText: action.newText};
    }
    default:
      return state;
  }
};

export const addPostActionCreater = () => {
  return {
    type: ADD_POST,
  };
};

export const updatePostActionCreater = (newText) => {
  return {
    type: UPDATE_NEW_POST,
    newText: newText,
  };
};
export default profileReducer;
