import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dataActions from 'modules/data';
import * as searchActions from 'modules/search';

import Spinner from 'components/Spinner';
import ShowDetail from 'components/ShowDetail';

class ShowDetailContainer extends PureComponent {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      DataActions: { fetchMovieDetail }
    } = this.props;

    fetchMovieDetail({ id });
  }

  componentDidUpdate(prevProps) {
    const {
      SearchActions: { setResultQuery },
      resultQuery,
      movieDetail
    } = this.props;

    if (prevProps.movieDetail === null && movieDetail && resultQuery === '') {
      setResultQuery({ resultQuery: movieDetail.name });
    }
  }

  componentWillUnmount() {
    const {
      DataActions: { resetMovieDetail }
    } = this.props;

    resetMovieDetail();
  }

  render() {
    const { isLoading, movieDetail } = this.props;

    return (
      <>
        {isLoading && <Spinner type="Audio" />}
        {movieDetail && <ShowDetail movieDetail={movieDetail} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  movieDetail: state.data.movieDetail,
  resultQuery: state.search.resultQuery
});

const mapDispatchToProps = dispatch => ({
  DataActions: bindActionCreators(dataActions, dispatch),
  SearchActions: bindActionCreators(searchActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetailContainer);
