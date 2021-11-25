import React, { useContext, useState } from 'react'
import AppContext from '../../store/AppContext'
import { preventSubmit } from '../../utils/dom.utils'

const EmailForm = (props) => {
    const { contextReducer } = useContext(AppContext)
    const [emailID, setEmailID] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setErrorEmail] = useState(false)
    const [passError, setErrorPass] = useState(false)
    
    const emailInputHandler = (_ev) => {
        setEmailID(_ev.currentTarget.value.trim())
        setErrorEmail(false)
    }

    const passwordInputHandler = (_ev) => {
        setPassword(_ev.currentTarget.value.trim())
        setErrorPass(false)
    }

    const signInFormHandler = (_ev) => {
        _ev.preventDefault()
        let isValidId = emailID.trim().length < 16 && emailID.trim().length > 2,
            isValidPass =  password.trim().length < 16 && password.trim().length > 2
        
        if(!isValidId) setErrorEmail(true)
        if (!isValidPass) setErrorPass(true)
        
        if (isValidId && isValidPass) {
            contextReducer({ type: 'signIn', email: emailID })
        }
    }

    return (
        <section className="section__onboarding">
            <div className={`wrap__onboard-form comn-onboard-box`}>
                    <span className="main-title">Welcome!</span>
                <h1 className="h1_onboard-main">
                    <span className="h1_sign-text">Sign In</span>
                </h1>
                <div className="wrap__sign-in-box">
                    <form className="form__sign-in" onSubmit={preventSubmit} encType="multipart/form-data">
                        <div className="wrap__input-field">
                            <input onChange={ emailInputHandler } autoComplete="off" value={emailID} type="text" name="email-address" className={`comn-input-form input__email-form ${emailError ? 'input__error-show' : ''}`} placeholder="Email address" />
                        </div>
                        <div className="wrap__input-field wrap__submit-field">
                            <input onChange={ passwordInputHandler } autoComplete="off" value={password} type="password" name="password" className={`comn-input-form input__email-form ${passError ? 'input__error-show' : ''}`} placeholder="Password" />
                        </div>
                        <div className="wrap__submit-field">
                            <button onClick={ signInFormHandler } className={`comn-btn btn_comn-style btn__sign-form`}>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EmailForm