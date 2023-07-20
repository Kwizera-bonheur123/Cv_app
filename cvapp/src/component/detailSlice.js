import { createSlice } from "@reduxjs/toolkit";
export const detailSlice = createSlice({
    name: "detail",
    initialState: {
        detail: {},
    },
    reducers: {
        add: (state, action) => {
            const newDetail = {
                ...state.detail,
                ...action.payload
            }
            state.detail = newDetail;
        }
    }
})
export const { add } = detailSlice.actions;
export default detailSlice.reducer;