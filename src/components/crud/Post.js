import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ReadCard from './ReadCard';
import WriteCard from './WriteCard';

const Post = () => {
  const params = useParams()
  const [post, setPosts] = useState(null);
  const [isWaiting, setisWaiting] = useState(false);
  const [typeCard, setTypeCard] = useState('read')
  const history = useNavigate();

  const getPosts = async () => {
    
    if (!isWaiting) {
      setisWaiting(true);
      
      fetch('http://localhost:7070/posts')
      .then(response => response.json())
      .then(function(data){
        setisWaiting(false);
        if (Array.isArray(data)) {
          for (const post of data) {
            if (Number(post.id) === Number(params.postId)) {
              setPosts({
                ...post
              });
            }
          }
        }
      })
      .catch(function(error){
        console.error(error);
        setisWaiting(false);
        setPosts(null);
      });
    }
  };

  const handlerSavePost = async () => {
    
    fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...post }),
    })
    .catch(function(error){
      console.error(error)
    });
  }

  const handlerDeletePost = async () => {
    
    fetch(`http://localhost:7070/posts/${post.id}`, { method: 'DELETE' })
    .then(() => history('/posts'))
    .catch(error => console.error(error));
  }

  useEffect(() => {
    getPosts();
    return () => {
      setisWaiting(false);
      setPosts(null);
    };
  }, []);

  return <div>
    {
      isWaiting 
      ? '...' 
      : <div>
          {post !== null ? <div>
            {typeCard === 'read' && <ReadCard content={post.content}/>}
            {typeCard === 'write' && <WriteCard content={post.content} saveContent={handlerSavePost} changeContent={(value) => setPosts({
              id: post.id,
              content: value
            })}/>}
          </div> : null}
          {typeCard === 'read' && <button onClick={() => setTypeCard('write')}>Изменить</button>}
          <button onClick={handlerDeletePost}>Удалить</button>
        </div>
    }
  </div>;
};

export default Post;
