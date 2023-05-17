import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const WriteCard = ({content, changeContent, saveContent}) => {
  const history = useNavigate();
  return (
    <>
      <button onClick={() => history('/posts')}>Отмена</button>
      <input type="text" value={content} onInput={(event) => changeContent(event.target.value)}/>
      <button onClick={saveContent}>Сохранить</button>
    </>
  )
}

WriteCard.defaultProps = {
  content: '',
  changeContent: () => null,
  saveContent: () => null
}

WriteCard.propTypes = {
  content: PropTypes.string,
  changeContent: PropTypes.func,
  saveContent: PropTypes.func
}

export default WriteCard;
