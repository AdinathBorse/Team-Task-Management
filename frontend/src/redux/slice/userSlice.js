import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: null,
  token: null,
  error: null,
  loading: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
      state.error = null
    },

    signInSuccess: (state, action) => {
      state.loading = false
      state.currentUser = action.payload.user
      state.token = action.payload.token
      state.error = null
    },

    signInFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    signOutSuccess: (state) => {
      state.currentUser = null
      state.token = null
      state.error = null
      state.loading = false
    },
  },
})

export const { signInStart, signInSuccess, signInFailure, signOutSuccess } =
  userSlice.actions

export default userSlice.reducer
