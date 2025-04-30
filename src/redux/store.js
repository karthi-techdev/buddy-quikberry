import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer';
import { photoReducer } from './reducers/photoReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    photo: photoReducer,
  },
});

export default store;
