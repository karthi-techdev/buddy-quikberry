import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, error: error.message });
  }
};
