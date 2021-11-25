import React, { Component } from 'react';
import { getStorageItem, reduceNonSavedState, setStorageItem } from '../utils/helper.utils';
import AppContext from './AppContext';
import ContextReducer from './ContextReducer';

class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.localData = getStorageItem();
        this.state = this.localData ? this.localData : { ...this.props.initialState };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return false;
    }

    contextReducer = (params) => {
        // reducer
        const derivedState = ContextReducer(this.state, params);
        setStorageItem(reduceNonSavedState(derivedState));
        this.setState(derivedState);
    };

    render() {
        let contextValue = {
            AppData: this.state,
            contextReducer: (params) => this.contextReducer(params)
        };
        return (
            <AppContext.Provider value={contextValue}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
