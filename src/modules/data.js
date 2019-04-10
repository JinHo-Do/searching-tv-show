import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import produce from 'immer';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.tvmaze.com'
    : 'http://api.tvmaze.com';

const FETCH_MOVIE_PENDING = 'FETCH_MOVIE_PENDING';
const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
const RESET_MOVIE_DATA = 'RESET_MOVIE_DATA';

const fetchMoviePending = createAction(FETCH_MOVIE_PENDING);
const fetchMovieSuccess = createAction(FETCH_MOVIE_SUCCESS);
const fetchMovieFailure = createAction(FETCH_MOVIE_FAILURE);

export const resetMovieData = createAction(RESET_MOVIE_DATA);

export const fetchMovie = ({ query }) => async dispatch => {
  dispatch(fetchMoviePending());

  try {
    const { data } = await axios.get(`${API_URL}/search/shows?q=${query}`);
    dispatch(fetchMovieSuccess(data));
  } catch (error) {
    console.log('FETCH error: ', error);
    dispatch(fetchMovieFailure());
  }
};

const initialState = {
  isLoading: false,
  isFailure: false,
  movieData: []
};

const dataReducer = handleActions(
  {
    [FETCH_MOVIE_PENDING]: state => ({
      ...state,
      isLoading: true
    }),
    [FETCH_MOVIE_SUCCESS]: (state, { payload }) =>
      produce(state, draft => {
        draft.movieData = payload;
        draft.isLoading = false;
      }),
    [FETCH_MOVIE_FAILURE]: state => ({
      ...state,
      isLoading: false,
      isFailure: true
    }),
    [RESET_MOVIE_DATA]: state =>
      produce(state, draft => {
        draft.movieData = [];
      })
  },
  initialState
);

export default dataReducer;
