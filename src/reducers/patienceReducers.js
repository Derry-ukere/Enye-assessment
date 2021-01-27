import {
  RECORDS_LIST_REQUEST,
  RECORDS_LIST_SUCCESS,
  RECORDS_LIST_FAIL,
  RECORDS_DETAILS_REQUEST,
  RECORDS_DETAILS_SUCCESS,
  RECORDS_DETAILS_FAIL,
} from '../constants/patientsConstants'

export const reecordListReducer = (state = { records: [] }, action) => {
  switch (action.type) {
    case RECORDS_LIST_REQUEST:
      return { loading: true, records: [] }
    case RECORDS_LIST_SUCCESS:
      return {
        loading: false,
        records: action.payload,
      }

    case RECORDS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const filteredReducer = (state = { filteredRecords: [] }, action) => {
  switch (action.type) {
    case RECORDS_DETAILS_REQUEST:
      return { loading: true }
    case RECORDS_DETAILS_SUCCESS:
      return { loading: false, filteredRecords: action.payload }
    case RECORDS_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
