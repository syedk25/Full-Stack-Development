import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux';    //1
import { store } from './store/store';    //2

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>        {/* //3 */}
      <App />
    </Provider>
 
)

// 1) Importing Provider to connect the Redux store to the React application

// 2) Importing the Redux store, that contains all states and reducers of the application.

/* 3) Wrapping the App component with the Provider component and passing the store as a prop to it.
      This allows us to access the Redux store from any component in our application. */  