import { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=afc596a6-9089-437a-8022-ff54b88bd0cf';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chat;
