import {
    FETCH_PHOTOS_REQUEST,
    FETCH_PHOTOS_SUCCESS,
    FETCH_PHOTOS_FAILURE,
  } from '../actions/photoActions';
  
  const initialState = {
    loading: false,
    photos: [],
    error: null,
  };
  
  export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PHOTOS_REQUEST:
        return { ...state, loading: true };
      case FETCH_PHOTOS_SUCCESS:
        return { ...state, loading: false, photos: action.payload };
      case FETCH_PHOTOS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  