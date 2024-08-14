import React, { useState } from "react";
import ChatBox from "./ChatBox.js";
import "./App.css";

function App() {
  // const [messages, setMessages] = useState([]);
  // const addMessage = async (text, type) => {
    // const newMessage = {
    //   id: new Date().getTime(),
    //   text,
    //   type,
    // };
    // await setMessages([...messages, newMessage]);
  // };

  return (
    <div className="App">
      <h1>ChatBot TCU</h1>
      <ChatBox />
      {/* <ChatBox messages={messages} setMessages={setMessages} addMessage={addMessage} /> */}
    </div>
  );
}

export default App;
