import React, { useState } from "react";
import MessageInput from "./MessageInput";
import Message from "./Message";
import "./ChatBox.css";

function ChatBox() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="chat-box">
      <div className="messages">
        {messages?.map((message) => (
          <Message key={message.id} text={message.text} type={message.type} />
        ))}
      </div>
      <MessageInput messages={messages} setMessages={setMessages} />
      {/* <MessageInput addMessage={addMessage} messages={messages} setMessages={setMessages} /> */}
    </div>
  );
}

export default ChatBox;
