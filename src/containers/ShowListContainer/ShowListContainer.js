import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from 'modules/search';
import * as dataActions from 'modules/data';

import ShowList from 'components/ShowList';
import Spinner from 'components/Spinner';

class ShowListContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleFetchMovieData();
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
      match: {
        params: { query }
      }
    } = this.props;

    if (query !== prevProps.match.params.query) {
      this.handleFetchMovieData();
    }
  }

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
