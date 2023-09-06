import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Massage";

const Dialogs = (props) => {
  let dialogsItem = props.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messageItem = props.messagesData.map((message) => (
    <Message text={message.text} />
  ));

  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };

  let newMessageChange = (event) => {
    let bodyText = event.target.value;
    props.newMessageChange(bodyText);
  };
  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialog_items}>{dialogsItem}</div>
      <div className={style.messages}>
        {messageItem}
        <div>
          <div>
            <textarea
              value={newMessageBody}
              placeholder="Enter your message"
              onChange={newMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
