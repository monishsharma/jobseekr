import * as actionTypes from './actiontypes';

export const isAuthenticatedHandler = (authState,token) => {
    return {
        type: actionTypes.IS_AUTHENTICATED,
        authState:authState,
        token:token
    }
}

export const saveJOBS = (job) => {
    return {
        type: actionTypes.SAVE_JOBS,
        job:job,
    }
}

