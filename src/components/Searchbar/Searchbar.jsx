import { Component } from 'react';
import PropTypes from 'prop-types';

import s from '../styles.module.css';
console.log(s);
class Searchbar extends Component {
  state = {
    search: '',
  };
  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.search); //оце кидае валюе назад
    this.reset();
  };
  reset() {
    this.setState({ search: '' });
  }
  render() {
    const { search } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={s.SearchForm__input}
            name="search"
            value={search}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
          <button className={s.SearchForm__button} type="submit">
            <span className={s.SearchForm__button__label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
