import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import Loader from '../assets/bean-eater-loader.gif'

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
              message: (
                <img src={Loader} height='40px' margin='15px' />
              ),
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

        return (
          <div className='chat-input-container'>
            <input
              placeholder='Send a message to ChatBot'
              size='35'
              onChange={saveInputText}
              value={inputText}
              onKeyDown={handleKeyDown}
              className='chat-input'
            />
            <button onClick={sendMessage} className='send-button'>
              Send
            </button>
          </div>
        );
      }