import React from 'react';
import UserLogin from './Login';
import UserSignup from './SignUp';
import './index.scss';
import {UserRoute} from "../../routes";


export function Login() {
    return <UserLogin/>
}

export function Signup() {
    return <UserSignup/>
}


export default function User() {
    return (
        <div className={'user-wrapper'}>
            <div className={'user-container'}>
                <Title/>
                <div className={'login-wrapper d-f-a-c'}>
                    <UserRoute/>
                </div>
            </div>
        </div>
    )
}

function Title() {
    return (
        <div className={'title'}>
            <h1>
                TODO App
            </h1>
            <h4>
                Welcome !
            </h4>
            <p className={'small-tag-line'}>
                Task management app to help you stay organized and manage your day-to-day.
            </p>
        </div>
    )
}