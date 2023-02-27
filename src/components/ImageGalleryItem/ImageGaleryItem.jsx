import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageURL, tags, showModal, largeImageURL }) => {
  return (
    <li onClick={() => showModal(largeImageURL)}>
      <img src={imageURL} alt={tags} width="100" height="70" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  showModal: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
