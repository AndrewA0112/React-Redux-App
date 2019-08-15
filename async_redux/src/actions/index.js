import axios from 'axios';

export const GET_PROFILE_DATA_START = 'GET_PROFILE_DATA_START'
export const GET_PROFILE_DATA_SUCCESS = 'GET_PROFILE_DATA_SUCCESS'
export const GET_PROFILE_DATA_FAILURE = 'GET_PROFILE_DATA_FAILURE'

export const getProfile = (_, input) => {
    return dispatch => {
        dispatch({ type: GET_PROFILE_DATA_START})
        axios
            .get(`https://api.bf4stats.com/api/playerInfo?plat=pc&name=${input}`)
            // ${input}
            .then(response => {
                console.log('RESPONSE', response.data)
                dispatch({ type: GET_PROFILE_DATA_SUCCESS, payload: response.data})
            })
            .catch(error => {
                dispatch({ type: GET_PROFILE_DATA_FAILURE, payload: error})
            })
    };
}