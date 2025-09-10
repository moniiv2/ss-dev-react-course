import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import Loader from '../assets/bean-eater-loader.gif';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
      {
        message: <img src={Loader} height='40px' margin='15px' />,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    setInputText('');

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages.slice(0, newChatMessages.length - 1),
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ]);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  function clearChat() {
    setChatMessages([]);
  }

  return (
    <div className='flex mb-[50px]'>
      <input
        placeholder='Send a message to ChatBot'
        size='35'
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
        className='py-3 px-4 text-[15px] grow rounded-lg border border-black-100'
      />
      <button
        onClick={sendMessage}
        className='bg-[rgb(25,135,84)] text-white px-5 py-3 ml-[10px] rounded-[10px] text-[15px] cursor-pointer'
      >
        Send
      </button>
      <button
        onClick={clearChat}
        className='bg-[rgb(230,230,230)] ml-[10px] text-[15px] rounded-[10px] cursor-pointer px-5'
      >
        Clear
      </button>
    </div>
  );
}
