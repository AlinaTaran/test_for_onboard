import { dataApiRequest } from '../../services/dataApi'

const GET_REPORTS = 'GET_REPORTS';
const SET_REPORT_STATUS_BY_ID = 'SET_REPORT_STATUS_BY_ID';

const initialState = {
  reports: [],
};

const reports = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REPORTS:
      return {
        reports: payload,
      }
    case SET_REPORT_STATUS_BY_ID:
      return {
        reports: state.reports.map(el => el.id === payload ? {...el, status: 1} : el),
      }
    default:
      return state
  }
}

export const getReports = data => ({
  type: GET_REPORTS,
  payload: data,
})
export const setReportStatusById = id => ({
  type: SET_REPORT_STATUS_BY_ID,
  payload: id,
})


export const fetchReports = () => async (dispatch) => {
  try {
    const data = await dataApiRequest();
    dispatch(getReports(data))
  } catch (error) {
    console.error(error)
  }
}

export default reports;
