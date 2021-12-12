import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import AppContext from '../store/AppContext'
import { R_PREFIX } from '../utils/dom.utils'
import AppRouter from './AppRouter'

const mainRoute = `/${R_PREFIX}`
const homeRoute = `/${R_PREFIX}/home`
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
        console.log(_location)
        switch (type) {
            case 'dashboard':
                if(_location === mainRoute) history.replace(homeRoute)
                break
            case 'homepage':
                if(_location !== mainRoute) history.replace(mainRoute)
                break
            default:
                if(_location !== mainRoute) history.replace(mainRoute)
                break
        }
    }

    return <AppRouter />
}

export default Main