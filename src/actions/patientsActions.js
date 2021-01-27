import axios from 'axios'
import { findPatients, fetchSingleRecord } from '../Data'

import {
  RECORDS_LIST_REQUEST,
  RECORDS_LIST_SUCCESS,
  RECORDS_LIST_FAIL,
  RECORDS_DETAILS_REQUEST,
  RECORDS_DETAILS_SUCCESS,
  RECORDS_DETAILS_FAIL,
} from '../constants/patientsConstants'

export const listRecords = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: RECORDS_LIST_REQUEST })

    const { data } = await axios.get(
      `https://api.enye.tech/v1/challenge/records`
    )
    const recordsArray = data.records.profiles
    const newAarray = findPatients(keyword, recordsArray)

    dispatch({
      type: RECORDS_LIST_SUCCESS,
      payload: newAarray,
    })
  } catch (error) {
    dispatch({
      type: RECORDS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const filteredPatience = (email = '') => (dispatch) => {
  try {
    dispatch({ type: RECORDS_DETAILS_REQUEST })
    const data = localStorage.getItem('filtered')
      ? JSON.parse(localStorage.getItem('filtered'))
      : []
    console.log('filtered dat from local storage', data)
    const singleRecords = fetchSingleRecord(data, email)
    console.log('single record from action', singleRecords)
    dispatch({
      type: RECORDS_DETAILS_SUCCESS,
      payload: singleRecords,
    })
  } catch (error) {
    dispatch({
      type: RECORDS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
