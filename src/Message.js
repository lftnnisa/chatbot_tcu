import React from "react";
import "./Message.css";

function Message({ text, type }) {
  return (
    <div className={`message ${type}`}>
      <label className={`label-type ${type}`}>{type}</label>
      <p>{text}</p>
    </div>
  );
}

export default Message;
