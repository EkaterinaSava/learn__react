import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
  state = {
    movies: [],
    locading: true,
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=5328d224&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovies = (str, type = 'all') => {
    this.setState({loading: true});
    fetch(`http://www.omdbapi.com/?apikey=5328d224&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  render() {
    const {movies, loading} = this.state;

    return (
      <main className="page-main">
        <div className="container">
          <Search searchMovies={this.searchMovies} />

          { loading ? (
            <Preloader />
          ) : (
            <Movies movies={movies} />
          )}
        </div>
      </main>
    )
  }
}

export { Main };