import React, { useEffect } from 'react';

const Chat = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.id = 'ze-snippet';
      script.src = 'https://static.zdassets.com/ekr/snippet.js?key=c361af4e-42de-4368-b364-2c6c53c09b5c';
      document.body.appendChild(script);
  
      return () => {
        // Cleanup: Remove the script when the component unmounts
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div>
        {/* Your component content */}
      </div>
    );
  };
  
  export default Chat;