import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import AppContext from '../store/AppContext'
import AppRouter from './AppRouter'

const Main = () => {
    
    const { AppData, contextReducer } = useContext(AppContext)
    
    let history = useHistory()
    
    let location = useLocation()
    
    useEffect(() => {
        contextReducer({ type: 'loading', loading: false })
        if (AppData.login.isLogged) redirectFilter('dashboard')
        else redirectFilter('homepage')
    }, [AppData.login])

    const redirectFilter = (type) => {
        let _location = location.pathname
        switch (type) {
            case 'dashboard':
                if(_location === '/') history.replace('/home')
                break
            case 'homepage':
                if(_location !== '/') history.replace('/')
                break
            default:
                if(_location !== '/') history.replace('/')
                break
        }
    }

    return <AppRouter />
}

export default Main