import React, { useCallback, useState } from "react";
import axios from "axios";
import "./MessageInput.css";

function MessageInput({ addMessage, messages, setMessages }) {
  const [inputValue, setInputValue] = useState("");

  const handleSend = useCallback(async () => {
    try {

      if (inputValue.trim() === "") return;

      setInputValue('');

      const newMessageInput = {
        id: new Date().getTime(),
        text: inputValue,
        type: "user",
      };
      await setMessages((prevMessage) => [...prevMessage, newMessageInput])

      // HIT API
      const response = await axios.post("http://localhost:8000/api/ask", {
        question: inputValue,
      });
      const answer = response.data.answer;
      if (answer) {
        console.log('masuk sini')
        setInputValue("");
        const newMessageAnswer = {
          id: new Date().getTime(),
          text: answer,
          type: "assistant",
        };
       setMessages((prevMessage) => [...prevMessage, newMessageAnswer])
        console.log({newMessageAnswer})
      }


    }catch (error) {
      console.log(error)
    }
  }, [inputValue])

  // const handleSend = async () => {
  //   try {
  //     if (inputValue.trim() === "") return;

  //     const newMessageInput = {
  //       id: new Date().getTime(),
  //       text: inputValue,
  //       type: "user",
  //     };
  //     await setMessages([...messages, newMessageInput])
  //     // addMessage(inputValue, "user");
      
  //     const response = await axios.post("http://localhost:8000/api/ask", {
  //       question: inputValue,
  //     });
  //     const answer = response.data.answer;
  //     console.log({answer})
  //     if (answer) {
  //       console.log('masuk sini')
  //       setInputValue("");
  //       const newMessageAnswer = {
  //         id: new Date().getTime(),
  //         text: answer,
  //         type: "assistant",
  //       };
  //       console.log({messages})
  //       console.log({newMessageAnswer})
  //       // console.log({messages})
  //       // console.log({newMessageAnswer})
  //       // setMessages([...messages, newMessageAnswer])
  //       // addMessage(answer, "assistant");

  //     }
  //   } catch (error) {
  //     addMessage("Error getting response from assistant.", "assistant");
  //   }
  // };

  return (
    <div className="message-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default MessageInput;
