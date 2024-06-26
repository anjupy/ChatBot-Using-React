import React from 'react';

const Message = ({ text, user }) => {
  return (
    <div className={`message ${user}`}>
      <div className="message-text">{text}</div>
    </div>
  );
};

export default Message;
