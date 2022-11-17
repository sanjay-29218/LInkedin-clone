import { createSlice } from '@reduxjs/toolkit';




export const userSlice = createSlice({ // createSlice is a function that accepts an object as a parameter. The object has two properties: name and initialState.
  name: 'user',           // The name property is the name of the slice. The initialState property is the initial state of the slice.
  initialState:{
    user:null,
  },
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
    },
   
    logout: (state) => {
      state.user=null
    },
  },
})  

export const { login,logout } = userSlice.actions; // export the actions

export const selectUser = (state) => state.user; // export the user value from the state  


export default userSlice.reducer; // export the reducer
