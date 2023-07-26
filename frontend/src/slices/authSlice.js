import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCrediantials(state,action){
        state.userInfo =action.payload
        localStorage.setItem('userInfo' , JSON.stringify(action.payload))
    },
    logout(state,action){
        state.userInfo =action.payload
        localStorage.removeItem('userInfo')
    },

  },
})

export const {setCrediantials, logout} = authSlice.actions
export default authSlice.reducer