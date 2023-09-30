import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: unidentified,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
  try {
    const response = await axios('https://randomuser.me/api/?results=5');
    return response.data;
  } catch(error) {
    throw thunkAPI.rejectWithValue(error);
  }
});

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.results;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message
      })
  }
})

export default usersSlice.reducer
