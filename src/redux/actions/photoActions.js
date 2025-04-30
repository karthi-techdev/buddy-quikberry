import axios from 'axios';

export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const fetchPhotos = () => async (dispatch) => {
  dispatch({ type: FETCH_PHOTOS_REQUEST });
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_PHOTOS_FAILURE, payload: error.message });
  }
};
