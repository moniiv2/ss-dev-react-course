import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'
import {Chatbot} from 'supersimpledev'
import './App.css'

function App() {
  useEffect(() => {
    Chatbot.addResponses({
      "what is your name": "My name is Simon :)"
    })
  }, [])

  

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || "");

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])

  function displayMessages() {
    if (chatMessages.length === 0) {
      return (
        <p className='welcome-message'>
          Welcome to the chatbot project! Send a message using the textbox
          below
        </p>
      );
    } else {
      return <ChatMessages chatMessages={chatMessages} />;
    }
  }

  return (
    <div className='app-container'>
      {displayMessages()}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
