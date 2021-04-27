import { createStore, combineReducers, applyMiddleware } from 'redux';
import anecdotesReducer from './reducers/anecdoteReducer'
import {filter} from './reducers/filterReducer'
import {notificationReducer} from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

let combinedReducer = combineReducers({
    anecdotes:anecdotesReducer,
    notification: notificationReducer,
    filter,
})

const store = createStore(
    combinedReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
     )
    )

export default store
