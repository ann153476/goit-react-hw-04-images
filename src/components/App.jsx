import { useState, useEffect } from 'react';

import { getImages } from 'api/posts';

import Modal from './Modal/Modal';

import Searchbar from './Searchbar/Searchbar';

import ImageGallery from './ImageGallery/ImageGalery';

import s from './styles.module.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await getImages(search, page);
        setItems(prevItems => [...prevItems, ...data.hits]);
        if (data.hits.length < 12) {
          setLoadMore(false);
        }
      } catch ({ response }) {
        setError({
          error: response.data.message || 'EERRRRORRR',
        });
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchPosts();
    }
  }, [search, page]);

  const updateSearch = search => {
    setSearch(search);
    setPage(1);
    setItems([]);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onshowModal = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={s.App}>
      {showModal && (
        <Modal onClose={onCloseModal}>
          <img src={largeImageURL} alt="" width="600" />
        </Modal>
      )}
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      <Searchbar onSubmit={updateSearch} />
      {items.length > 0 && (
        <ImageGallery items={items} showModal={onshowModal} />
      )}
      {search && loadMore && (
        <button onClick={onLoadMore} className={s.Button}>
          Load more
        </button>
      )}
      {search && items.length === 0 && <p>no photo...</p>}
    </div>
  );
};

export default App;
