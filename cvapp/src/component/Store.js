import { configureStore } from '@reduxjs/toolkit'
import detailReducer from './detailSlice'
export default configureStore({
    reducer: {
        detail: detailReducer
    },
})