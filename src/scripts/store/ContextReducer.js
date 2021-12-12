import { initialState } from "../utils/dom.utils";

const ACTION = {
    signIn: 'signIn',
    signOut: 'signOut',
    loading: 'loading'
};

const ContextReducer = (state, payload) => {
    let stepState = state;
    try {
        if (payload instanceof Array) {
            payload.map((payloadObj) => {
                const nextState = setStateInContext(stepState, payloadObj);
                stepState = {...nextState};
            });
        } else {
            stepState = setStateInContext(stepState, payload);
        }
    } catch (error) {
        console.log(error);
    }
    return stepState;
};

export default ContextReducer;

const setStateInContext = (state, payload) => {
    if (payload.hasOwnProperty('type')) {
        switch (payload.type) {
            case ACTION.signIn:
                let { email } = payload;
                return {
                    ...state,
                    login: {
                        ...state.login,
                        email: email,
                        isLogged: true
                    }
                };

            case ACTION.signOut:
                return { ...initialState };

            case ACTION.loading:
                let { loading } = payload;
                return { ...state, loading: !!loading };

            default:
                return state;
        }
    }
};
