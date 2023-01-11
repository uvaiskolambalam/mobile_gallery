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
        addToCart: (state, action) => {
            const itemExist = state.cartList.find((item) => item.id === action.payload.id)
            if (itemExist) {
                state.cartList.forEach((item) => {
                    if (item?.id === action.payload.id) {
                        item.count=1;
                    }
                })
            } else {
                
                state.cartList.push({
                    ...action.payload,
                    count:1
                })
            }
        },
        increment: (state, action) => {
            console.log(action,'action');
            const productID = action.payload
            state.cartList.forEach((item) => {
                if (item?.id === productID) {
                    item.count++;
                }
            })
        },
        decrement: (state,action) => {
            const productID = action.payload
            state.cartList.forEach((item) => {
                item?.id === productID &&  item.count--;
                   
                
            })
        }
        
    }
})

export const { addToCart, increment, decrement } = cartSlice.actions

export default cartSlice.reducer