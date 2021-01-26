import axios from 'axios'

import {
  RECORDS_LIST_REQUEST,
  RECORDS_LIST_SUCCESS,
  RECORDS_LIST_FAIL,
  RECORDS_DETAILS_REQUEST,
  RECORDS_DETAILS_SUCCESS,
  RECORDS_DETAILS_FAIL,
} from '../constants/patientsConstants'

export const listRecords = () => async (dispatch) => {
  try {
    dispatch({ type: RECORDS_LIST_REQUEST })

    const { data } = await axios.get(
      `https://api.enye.tech/v1/challenge/records`
    )
    dispatch({
      type: RECORDS_LIST_SUCCESS,
      payload: data,
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
