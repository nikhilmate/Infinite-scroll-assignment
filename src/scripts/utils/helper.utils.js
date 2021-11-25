const _prefix = 'infinite_scroll'

export const getStorageItem = () => {
    try {
        let localData = localStorage.getItem(`${_prefix}`),
            derivedData = localData ? JSON.parse(localData) : null
        return derivedData
    } catch (error) {
        console.log(error)
        return null
    }
}

export const setStorageItem = (_data) => {
    try {
        let derivedData = JSON.stringify(_data)
        if (derivedData) localStorage.setItem(`${_prefix}`, derivedData)
    } catch (error) {
        console.log(error)
    }
}

/* 
*
*
* Dependent to redux state tree may need to change after changing state tree 
*
*
*/
export const reduceNonSavedState = (_state) => {
    let _derivedState = {
        ..._state,
        loading: true,
        users: {
            list: []
        }
    }
    return _derivedState
}