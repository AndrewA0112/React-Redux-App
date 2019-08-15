import { GET_PROFILE_DATA_START, GET_PROFILE_DATA_SUCCESS, GET_PROFILE_DATA_FAILURE } from "../actions";

const initialState = {
    profile: null,
    error: "",
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_DATA_START:
            console.log(`GET_PROFILE_DATA_START`)
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_PROFILE_DATA_SUCCESS:
                console.log(`GET_PROFILE_DATA_SUCCESS`)
            return {
                ...state,
                isLoading: false,
                error: '',
                profile: action.payload
            }
        case GET_PROFILE_DATA_FAILURE:
            console.log(`GET_PROFILE_DATA_FAILURE`)
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                profile: null
            }
        default:
            return state
    }
}