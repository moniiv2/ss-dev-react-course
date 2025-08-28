import { ChatMessage } from "./ChatMessage.jsx";
import useAutoScroll from "./useAutoScroll.jsx";

function ChatMessages({ chatMessages }) {
        // const [chatMessages, setChatMessages] = array
        // const chatMessages = array[0];
        // const setChatMessages = array[1]; //the updater funtion

        const chatMessagesRef = useAutoScroll([chatMessages]);

        return (
          <div className='chat-messages-container' ref={chatMessagesRef}>
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