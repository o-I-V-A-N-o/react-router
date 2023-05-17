import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ id, content }) => {
  const history = useNavigate();
  return (
    <div className="card" onClick={() => history(`/posts/${id}`)}>
      <h2>Пост {id}: {content}</h2>
    </div>
  );
};

Card.defaultProps = {
  id: null,
  content: null,
};

Card.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
};

export default Card;
