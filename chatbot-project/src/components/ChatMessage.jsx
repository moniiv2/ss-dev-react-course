import RobotProfileImage from '../assets/chatbot icon.jpeg';
import UserProfileImage from '../assets/user profile.jpeg';
import dayjs from 'dayjs';

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

  const time = dayjs().valueOf();
  return (
    <div
      className={
        sender === 'user' ? 'flex items-start justify-end' : 'flex items-start'
      }
    >
      {sender === 'robot' && (
        <img src={RobotProfileImage} className='w-11 rounded-[50%]' alt='' />
      )}
      <div className='bg-[rgb(238,238,238)] px-5 py-[15px] rounded-lg mx-[10px] mb-5 max-w-[300px]'>
        {message}
        <p className='text-gray-900 text-xs mb-0'>
          {dayjs(time).format('HH:mm')}
        </p>
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className='w-11 rounded-[50%]' alt='' />
      )}
    </div>
  );
}
