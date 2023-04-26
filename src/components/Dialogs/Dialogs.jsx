import React from "react";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Massage";


const Dialogs = (props) => {
  let dialogsItem = props.state.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messageItem = props.state.messagesData.map((message) => (
    <Message text={message.text} />
  ));
  return (
    <div className={style.dialogs}>
      <div className={style.dialog_items}>{dialogsItem}</div>
      <div className={style.messages}>{messageItem }</div>
    </div>
  );
};

export default Dialogs;
