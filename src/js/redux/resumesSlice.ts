import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User, initialState } from '../types';
import { STATUS } from '../const';

import api from '../api';

export const fetchUsers = createAsyncThunk('todo/fetchTodo', async () => {
  const result = await api.getUsers();
  return result.data.slice(0, 6);
});

export const counterSlice = createSlice({
  name: 'resumes',
  initialState: {
    resumes: [],
    archiveResumes: [],
    status: STATUS.LOADING,
  },
  reducers: {
    addToArchive: (state, action) => {
      const item = state.resumes.find(({ id }) => id === action.payload);
      state.resumes = state.resumes.filter(({ id }) => id !== action.payload);
      if (item) {
        state.archiveResumes.push(item);
      }
    },
    addToHidden: (state, action) => {
      state.resumes = state.resumes.filter(({ id }) => id !== action.payload);
    },
    addToResumes: (state, action) => {
      const item = state.archiveResumes.find(({ id }) => id === action.payload);
      state.archiveResumes = state.archiveResumes.filter(
        ({ id }) => id !== action.payload,
      );
      if (item) {
        state.resumes.push(item);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state: initialState) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state: initialState, action: { type: string; payload: User[] }) => {
        state.resumes = action.payload;
        state.status = STATUS.SUCCESS;
      },
    );
    builder.addCase(fetchUsers.rejected, (state: initialState) => {
      state.status = STATUS.ERROR;
    });
  },
});

export const { addToArchive, addToHidden, addToResumes } = counterSlice.actions;
export default counterSlice.reducer;
