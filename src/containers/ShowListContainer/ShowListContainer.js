import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from 'modules/search';
import * as dataActions from 'modules/data';

import ShowList from 'components/ShowList';
import Spinner from 'components/Spinner';

class ShowListContainer extends Component {
  lazyImages = [];

  active = false;

  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleFetchMovieData();

    window.addEventListener('scroll', this.handleLazyLoadImages);
    window.addEventListener('resize', this.handleLazyLoadImages);
    window.addEventListener('orientationchange', this.handleLazyLoadImages);
  }

  shouldComponentUpdate(nextProps) {
    const { movieData, isLoading, resultQuery } = this.props;

    return (
      movieData !== nextProps.movieData ||
      isLoading !== nextProps.isLoading ||
      resultQuery !== nextProps.resultQuery
    );
  }

  componentDidUpdate(prevProps) {
    const {
      movieData,
      match: {
        params: { query }
      }
    } = this.props;

    if (query !== prevProps.match.params.query) {
      this.handleFetchMovieData();
    }

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
      resultQuery,
      DataActions: { fetchMovie },
      SearchActions: { resetQuery, setResultQuery }
    } = this.props;

    if (!resultQuery) {
      setResultQuery({ resultQuery: query });
    }

    fetchMovie({ query });
    resetQuery();
  };

  render() {
    const { movieData, isLoading } = this.props;

    return (
      <>
        {isLoading && <Spinner type="Watch" />}
        {!!movieData.length && <ShowList movieData={movieData} />}
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
)(ShowListContainer);
