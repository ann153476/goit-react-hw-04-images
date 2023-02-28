import PropTypes from 'prop-types';

import s from '../styles.module.css';

const ImageGalleryItem = ({ imageURL, tags, showModal, largeImageURL }) => {
  return (
    <li className={s.ImageGalleryItem} onClick={() => showModal(largeImageURL)}>
      <img
        className={s.ImageGalleryItem__image}
        src={imageURL}
        alt={tags}
        width="100"
        height="70"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
