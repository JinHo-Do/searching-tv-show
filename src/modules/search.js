import { createAction, handleActions } from 'redux-actions';

const SET_QUERY = 'SET_QUERY';
const RESET_QUERY = 'RESET_QUERY';
const SET_RESULT_QUERY = 'SET_RESULT_QUERY';

export const setQuery = createAction(SET_QUERY);
export const resetQuery = createAction(RESET_QUERY);
export const setResultQuery = createAction(SET_RESULT_QUERY);

const initialState = {
  query: '',
  resultQuery: ''
};

const searchReducer = handleActions(
  {
    [SET_QUERY]: (state, { payload }) => ({
      ...state,
      query: payload.query
    }),
    [RESET_QUERY]: state => ({
      ...state,
      query: ''
    }),
    [SET_RESULT_QUERY]: (state, { payload }) => ({
      ...state,
      resultQuery: payload.resultQuery
    })
  },
  initialState
);

export default searchReducer;
