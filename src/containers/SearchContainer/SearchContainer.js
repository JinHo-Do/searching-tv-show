import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from 'modules/search';
import * as dataActions from 'modules/data';

import SearchBox from 'components/SearchBox';

class SearchContainer extends PureComponent {
  input = createRef();

  componentDidMount() {
    const iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    if (iOS) {
      if ('scrollRestoration' in window.history) {
        this._oldScrollRestoration = window.history.scrollRestoration;
        window.history.scrollRestoration = 'manual';
      } else {
        this._oldScrollRestoration = null;
      }
    }

    window.scrollTo(0, 0);
    this.input.current.focus();
  }

  onChangeInput = e => {
    const { value } = e.target;
    const {
      SearchActions: { setQuery }
    } = this.props;

    setQuery({ query: value });
  };

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  };

  onSubmit = () => {
    const {
      history,
      query,
      SearchActions: { setResultQuery }
    } = this.props;

    setResultQuery({ resultQuery: query });
    this.input.current.blur();
    history.push(`/result/${query}`);
  };

  render() {
    const {
      query,
      resultQuery,
      movieData,
      movieDetail,
      isLoading
    } = this.props;
    const { onChangeInput, onSubmit, onKeyDown, input } = this;

    return (
      <>
        <SearchBox
          setRef={input}
          value={query}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
          onSubmit={onSubmit}
          hasResult={!!movieData.length || movieDetail}
          resultQuery={resultQuery}
          isLoading={isLoading}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  movieData: state.data.movieData,
  movieDetail: state.data.movieDetail,
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
)(SearchContainer);
