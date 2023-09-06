import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
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
    isAuth: state.auth.isAuth,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);

