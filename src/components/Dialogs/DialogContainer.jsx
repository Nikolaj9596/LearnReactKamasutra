import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreater,
  updateMessageBodyActionCreater,
} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    newMessageBody: state.messagesPage.newMessageBody,
    dialogsData: state.messagesPage.dialogsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageActionCreater());
    },
    newMessageChange: (bodyText) => {
      dispatch(updateMessageBodyActionCreater(bodyText));
    },
  };
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;
