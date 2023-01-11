// 1. Provider => helps to injuct store to react app
// 2. Store => all states in this part. so this store we can to injuct to our react app
// 3. Reducer => impement logics and other things between state and action
// 4. Action


// fristley we have a state
// then we set that state to STORE
// ACTION => Button click
// when button clicked this arrived in to REDUCER
// then REDUCER will be update the state
// then the PROVIDER will injuct all updated datas to react
import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    cartList: [],
    cartCount:0
};
const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state) => {
            state.cartCount=1
        },
        increment: (state) => {
            state.cartCount +=1
        },
        decrement: (state) => {
            state.cartCount -=1
        }
        
    }
})

export const { addToCart, increment, decrement } = cartSlice.actions

export default cartSlice.reducer