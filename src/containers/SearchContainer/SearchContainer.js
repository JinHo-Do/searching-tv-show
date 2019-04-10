import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from 'modules/search';
import * as dataActions from 'modules/data';

import SearchBox from 'components/SearchBox';

class SearchContainer extends PureComponent {
  input = createRef();

  componentDidMount() {
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
    history.push(`/result/${query}`);
  };

  render() {
    const { query, resultQuery, movieData } = this.props;
    const { onChangeInput, onSubmit, onKeyDown, input } = this;

    return (
      <>
        <SearchBox
          setRef={input}
          value={query}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
          onSubmit={onSubmit}
          hasResult={!!movieData.length}
          resultQuery={resultQuery}
          length={movieData.length}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
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
)(SearchContainer);
