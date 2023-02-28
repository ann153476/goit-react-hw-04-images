import React, { Component } from 'react';

import { getImages } from 'api/posts';

import Modal from './Modal/Modal';

import Searchbar from './Searchbar/Searchbar';

import ImageGallery from './ImageGallery/ImageGalery';

import s from './styles.module.css';

class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
    showModal: false,
    largeImageURL: '',
    loadMore: true,
  };
  async fetchPosts() {
    try {
      const { search, page, items } = this.state;
      this.setState({ loading: true });
      const { data } = await getImages(search, page);
      this.setState({ items: [...items, ...data.hits] });
      if (data.hits.length < 12) {
        this.setState({ loadMore: false });
      }
    } catch ({ response }) {
      this.setState({
        error: response.data.message || 'EERRRRORRR',
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  updateSearch = search => {
    this.setState({ search, page: 1, items: [] });
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      this.fetchPosts();
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  //largeImageURL модалка, webformatURL маленька картинка,page є
  showModal = largeImageURL => {
    this.setState({
      showModal: true,
      largeImageURL,
    });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const {
      items,
      loading,
      error,
      search,
      showModal,
      largeImageURL,
      loadMore,
    } = this.state;
    return (
      <div className={s.App}>
        {showModal && (
          <Modal onClose={this.onCloseModal}>
            <img src={largeImageURL} alt="" width="600" />
          </Modal>
        )}
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        <Searchbar onSubmit={this.updateSearch} />
        {items.length > 0 && (
          <ImageGallery items={items} showModal={this.showModal} />
        )}
        {search && loadMore && (
          <button onClick={this.onLoadMore} className={s.Button}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
