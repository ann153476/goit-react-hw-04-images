import ImageGalleryItem from '../ImageGalleryItem/ImageGaleryItem';

import PropTypes from 'prop-types';

import s from '../styles.module.css';

const ImageGallery = ({ items, showModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem
          largeImageURL={item.largeImageURL}
          showModal={showModal}
          key={item.id}
          imageURL={item.webformatURL}
          tags={item.tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  showModal: PropTypes.func.isRequired,
};

export default ImageGallery;
