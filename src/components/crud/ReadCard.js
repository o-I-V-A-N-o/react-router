import PropTypes from 'prop-types';

const ReadCard = ({content}) => {
  return (
    <>
      <div>Автор поста</div>
      <div>{content}</div>
    </>
  )
}

ReadCard.defaultProps = {
  content: ''
}

ReadCard.propTypes = {
  content: PropTypes.string
}

export default ReadCard;
