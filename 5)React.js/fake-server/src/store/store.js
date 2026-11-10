import {configureStore} from '@reduxjs/toolkit';        // import configureStore to Creating Store

import cartSliceReducer from './cartSlice';             
 
export const store = configureStore({
    reducer: {                               //1
        cart: cartSliceReducer               // the cart key represents the reducer, that is cartSliceReducer.
    }
});
 
  
 
//  1)  Name of the Slice, that Store reducers.
//  and you can add as many you want  

// Reducer: 
        // A  function, that takes the current (state, action) as arguments 
        // and returns a new state.  

// Store: 
        // The store is the central place where all the state of your application is stored.  