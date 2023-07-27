const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY ";
const SEND_MESSAGE = "SEND_MESSAGE ";

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.messageText };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 6, text: body }],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreater = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateMessageBodyActionCreater = (messageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    messageText: messageText,
  };
};

export default messageReducer;
