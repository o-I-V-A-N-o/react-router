import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isWaiting, setisWaiting] = useState(false);

  const history = useNavigate();

  const getPosts = async () => {
    
    if (!isWaiting) {
      setisWaiting(true);
      
      fetch('http://localhost:7070/posts')
      .then(response => response.json())
      .then(function(data){
        setisWaiting(false);
        if (Array.isArray(data)) {
          setPosts([...data]);
        }  
      })
      .catch(function(error){
        console.error(error);
        setisWaiting(false);
        setPosts([]);
      });
    }
  };

  useEffect(() => {
    getPosts();
    return () => {
      setisWaiting(false);
      setPosts([]);
    };
  }, []);

  const handleRedirectToNewPost = () => {
    history('/posts/new');
  };

  return (
    <div>
      <div>
        <button onClick={handleRedirectToNewPost}>Создать пост</button>
      </div>
      {isWaiting
        ? '...'
        : posts.map((element, index) => (
            <Card key={index} id={element.id} content={element.content} />
          ))}
    </div>
  );
};

export default Posts;
