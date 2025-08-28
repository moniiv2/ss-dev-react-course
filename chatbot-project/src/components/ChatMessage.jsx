import RobotProfileImage from '../assets/chatbot icon.jpeg'
import UserProfileImage from '../assets/user profile.jpeg'

export function ChatMessage({ message, sender }) {
        //const { message } = props;
        //const { sender } = props;
        /*
        if (sender === 'robot') {
          return (
            <div>
              <img src='chatbot icon.jpeg' width='50' alt='' />
              {message}
            </div>
          );
        }
        */
        return (
          <div
            className={
              sender === 'user' ? 'chat-message-user' : 'chat-message-robot'
            }
          >
            {sender === 'robot' && (
              <img
                src={RobotProfileImage}
                className='chat-message-profile'
                alt=''
              />
            )}
            <div className='chat-message-text'>{message}</div>
            {sender === 'user' && (
              <img
                src={UserProfileImage}
                className='chat-message-profile'
                alt=''
              />
            )}
          </div>
        );
      }