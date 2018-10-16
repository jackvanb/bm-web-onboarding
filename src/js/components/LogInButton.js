// @flow
import React from 'react'
import Button from './Button'

type ButtonOption = 'login' | 'logout' | 'signup'

type Props = {
    isLoggedIn: boolean,
    override?: ButtonOption
}

function LogInButton(props: Props): 
React.Element<*> {

    // Button Text
    const getButtonText = (type: ButtonOption): string => {
        return {
            login: 'Log In',
            logout: 'Log Out',
            signup: 'Sign Up'
        }[type]
    }

    // Determine Button Text
    const text = props.override ? getButtonText(props.override) :
                 getButtonText(props.isLoggedIn ? 'logout' : 'login')

    // Click Message
    const getClickMsg = (type: ButtonOption): string => {
        return {
            login: 'Logging you in...',
            logout: 'Logging you out...',
            signup: 'Signing you up...'
        }[type]
    }

    // On Click
    const handleClick = () => {
        const msg = props.override ? getClickMsg(props.override) :
                    getClickMsg(props.isLoggedIn ? 'logout' : 'login')
        
        window.alert(msg)
    }

    return (
        <Button primary onClick={handleClick}>{text}</Button>
    )
}

export default LogInButton

