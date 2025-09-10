import { ChatMessage } from './ChatMessage.jsx';
import useAutoScroll from './useAutoScroll.jsx';

function ChatMessages({ chatMessages }) {
  // const [chatMessages, setChatMessages] = array
  // const chatMessages = array[0];
  // const setChatMessages = array[1]; //the updater funtion

  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div
      className='grow mt-5 overflow-auto'
      ref={chatMessagesRef}
      style={{ scrollbarWidth: 'none' }}
    >
      {chatMessages.map((chatmessage) => {
        return (
          <ChatMessage
            key={chatmessage.id}
            message={chatmessage.message}
            sender={chatmessage.sender}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
