import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface statsInfoState {
  username: string,
  year: any,
  theme: any
}

const initialState: statsInfoState = {
    username: '',
    year: null,
    theme: null
}

export const statsInfo = createSlice({
  name: 'stats-info',
  initialState,
  reducers: {
    setUsername : (state, action) => {
        state.username = action.payload
    },
    setYear : (state, action) => {
        state.year = action.payload
    },
    setTheme : (state, action) => {
        state.theme = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUsername, setYear, setTheme } = statsInfo.actions

export default statsInfo.reducer