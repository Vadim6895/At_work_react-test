import { configureStore } from '@reduxjs/toolkit';

import resumesSlice from './resumesSlice';

const store = configureStore({
  reducer: {
    resumes: resumesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
