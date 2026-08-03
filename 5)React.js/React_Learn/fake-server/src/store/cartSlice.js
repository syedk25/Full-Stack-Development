import {createSlice} from '@reduxjs/toolkit';        // import createSlice to Creating Slice 

let datafromWeb=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []; // Retrieving the cart data from localStorage or initializing as an empty array

const cartSlice = createSlice({     
    name: "cart",                               // The name of the slice,
    initialState: datafromWeb,            // The initial state of the slice,  
    reducers:{                                  //1
        addItem(state, action){    
            state.push(action.payload) 
            localStorage.setItem("cart",JSON.stringify([...state, action.payload]))
        },  
        removeItem(state, action){  
            let newProducts = state.filter(item => item.id !== action.payload)
            localStorage.setItem("cart", JSON.stringify([...newProducts]))
            return newProducts
        }
    }
})

export default cartSlice.reducer   

export let {addItem, removeItem} = cartSlice.actions     

//1) The reducers object contains the reducer functions(state, action)

//Slice: (part of store) 
        // A slice is a collection of reducer logic and actions
