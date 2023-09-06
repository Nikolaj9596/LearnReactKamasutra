import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE";

let initialState = {
  postData: [
    { id: 1, message: "Hi this if my first post", likesCount: 11 },
    { id: 1, message: "Hi this if my second post", likesCount: 9 },
    { id: 1, message: "Hi this if my three post", likesCount: 0 },
    { id: 1, message: "Hi this if my four post", likesCount: 88 },
  ],
  newPostText: "it hello",
  profile: null,
  status: "",
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
      return { ...state, newPostText: action.newText };
    }
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS_PROFILE:
      return { ...state, status: action.status };
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

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile: profile,
  };
};

export const setStatusProfile = (status) => {
  return {
    type: SET_STATUS_PROFILE,
    status: status,
  };
};

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((res) => {
      dispatch(setProfile(res.data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((res) => {
      dispatch(setStatusProfile(res.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setStatusProfile(res.data));
      }
    });
  };
};
export default profileReducer;
