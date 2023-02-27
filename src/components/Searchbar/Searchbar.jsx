import { Component } from 'react';

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
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            name="search"
            value={search}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
