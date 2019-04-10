import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from 'modules/search';
import * as dataActions from 'modules/data';

import MovieList from 'components/MovieList';
import Spinner from 'components/Spinner';

class ShowContainer extends PureComponent {
  lazyImages = [];

  active = false;

  componentDidMount() {
    this.handleFetchMovieData();

    window.addEventListener('scroll', this.handleLazyLoadImages);
    window.addEventListener('resize', this.handleLazyLoadImages);
    window.addEventListener('orientationchange', this.handleLazyLoadImages);
  }

  componentDidUpdate(prevProps) {
    const { movieData } = this.props;

    if (prevProps.movieData !== movieData) {
      this.lazyImages = Array.from(document.querySelectorAll('.lazy-load'));
    }
  }

  componentWillUnmount() {
    const {
      DataActions: { resetMovieData }
    } = this.props;

    resetMovieData();

    window.removeEventListener('scroll', this.handleLazyLoadImages);
    window.removeEventListener('resize', this.handleLazyLoadImages);
    window.removeEventListener('orientationchange', this.handleLazyLoadImages);
  }

  handleLazyLoadImages = () => {
    if (!this.active) {
      const { innerHeight } = window;
      this.active = true;

      setTimeout(() => {
        this.lazyImages.forEach(lazyImage => {
          if (
            lazyImage.getBoundingClientRect().top <= innerHeight &&
            lazyImage.getBoundingClientRect().bottom >= 0
          ) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazy-load');

            this.lazyImages = this.lazyImages.filter(
              image => image !== lazyImage
            );

            if (this.lazyImages.length === 0) {
              window.removeEventListener('scroll', this.handleLazyLoadImages);
              window.removeEventListener('resize', this.handleLazyLoadImages);
              window.removeEventListener(
                'orientationchange',
                this.handleLazyLoadImages
              );
            }
          }
        });

        this.active = false;
      }, 200);
    }
  };

  handleFetchMovieData = () => {
    const {
      match: {
        params: { query }
      },
      DataActions: { fetchMovie },
      SearchActions: { resetQuery, setResultQuery }
    } = this.props;

    fetchMovie({ query });
    setResultQuery({ resultQuery: query });
    resetQuery();
  };

  render() {
    const { movieData, isLoading } = this.props;

    return (
      <>
        {isLoading && <Spinner />}
        {!!movieData.length && <MovieList movieData={movieData} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  isFailure: state.data.isFailure,
  movieData: state.data.movieData,
  query: state.search.query,
  resultQuery: state.search.resultQuery
});

const mapDispatchToProps = dispatch => ({
  DataActions: bindActionCreators(dataActions, dispatch),
  SearchActions: bindActionCreators(searchActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowContainer);
