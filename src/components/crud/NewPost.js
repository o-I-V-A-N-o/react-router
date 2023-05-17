import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [postText, setpostText] = useState('');
  const [isWaiting, setisWaiting] = useState(false);
  const history = useNavigate();

  const handlerRedirectToHome = () => {
    setpostText('');
    history('/posts');
  };

  const handlerCreatePost = async () => {
    
    if (!isWaiting) {
      setisWaiting(true);
      
      fetch('http://localhost:7070/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: 0, content: postText}),
      })
      .then(() => {
        setisWaiting(false);
        setpostText('');
        handlerRedirectToHome();
      })
      .catch(function(error){
        console.error(error);
        setisWaiting(false);
        setpostText('');
      });
    }
  };

  return (
    <div>
      {isWaiting ? (
        '...'
      ) : (
        <>
          <input
            type="text"
            value={postText}
            onChange={(event) => setpostText(event.target.value)}
          />
          <button onClick={handlerRedirectToHome}>Отмена</button>
          <button onClick={handlerCreatePost}>Опубликовать</button>
        </>
      )}
    </div>
  );
};

export default NewPost;
