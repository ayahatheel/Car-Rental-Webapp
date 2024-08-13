import { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=331b3ea0-7afc-44ad-8e2f-d2fc3e5a36c3';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chat;
