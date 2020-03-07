import {api} from "../api/api";

const SET_USER_DATA = '/auth/SET_USER_DATA';
const SIGN_IN_LOADING = 'auth/LOADING';
const SIGN_IN_ERROR = 'auth/ERROR';

const initialState = {
    userId: null,
    email: null,
    login: null,
    loading: false,
    error: '',
    success: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SIGN_IN_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case SIGN_IN_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
                success: false,
            }
        }
        default:
            return state;
    }
};
export const signInLoading = (loading) => ({type: SIGN_IN_LOADING, loading});
export const signInError = (error) => ({type: SIGN_IN_ERROR, error,});
export const setAuthUserData = (userId, email, login, success) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, success}
});

export const getAuthUserData = () => async (dispatch) => {
    try {
        const data = await api.getMe();
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    } catch (e) {
        dispatch(signInError(e.message));
    }
};

export const login = (email, password) => async (dispatch) => {
    dispatch(signInLoading(true));
    try {
        const data = await api.login(email, password);
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            dispatch(signInError(data.messages[0]));
        }
    } catch (e) {
        dispatch(signInError(e.message));
    }
};

export const logout = () => async (dispatch) => {
    try {
        const data = await api.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    } catch (e) {
        dispatch(signInError(e.message));
    }
    finally {
        dispatch(signInLoading(false))
    }
};



