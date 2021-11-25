export const initialState = {
    login: {
        email: null,
        isLogged: false,
        attempted: false
    },
    loading: true
};

export const preventSubmit = _ev => _ev.preventDefault()

export const getLocaleString = (date) => {
    let dateinstance = new Date(date)
    if (dateinstance.getTime() === dateinstance.getTime()) {
        let localeStr = dateinstance.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        return localeStr
    }
    return '';
}