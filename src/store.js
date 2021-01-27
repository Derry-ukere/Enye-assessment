import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  reecordListReducer,
  filteredReducer,
} from './reducers/patienceReducers'

const reducer = combineReducers({
  recordslist: reecordListReducer,
  filtered: filteredReducer,
})

const FilteredPatienceFromStorage = localStorage.getItem('filtered')
  ? JSON.parse(localStorage.getItem('filtered'))
  : []
const initialState = {
  filtered: { filteredRecords: FilteredPatienceFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
