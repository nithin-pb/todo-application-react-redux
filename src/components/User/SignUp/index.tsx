import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import useForm from "../../../hooks/useForm";
import useValidation from "../../../hooks/useValidation";
import Error from "../../../shared/Error";

import {createNewUser, login} from '../../../store/user/userSlice'
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import Toast from "../../../shared/Toast";

export default function SignUp() {
    return (
        <div style={{width: '100%'}} className={'login-container'}>
            <h2 className={'h2'}> SignUp </h2>
            <SignUpForm/>
        </div>
    );
}


function SignUpForm() {
    const dispatch = useDispatch()
    const users = useSelector(login)
    const [state, setState] = useForm({email: '', password: '', phone: ''})
    const [error, setError] = useState({error: false, message: ''})
    const [validation, setValidation] = useValidation({email: true, password: true, phone: true});

    const handleChange = (e: any) => {
        setState(e);
        setValidation(e.target.name, e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setError({error: false, message: ''})
        const userStatus = users.some((user: any) => user.email === state.email);
        const fieldCheck = state.email && state.password && state.phone
        if (!userStatus && fieldCheck) {
            const payload = {email: state.email, phone: state.phone, password: state.password}
            dispatch(createNewUser(payload));
            toast("New user created");
        } else {
            setError({error: true, message: 'Something went wrong! please try again'})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder={'Email'} name={'email'}
                   value={state.email}
                   onChange={handleChange}
                   className={!validation.email ? 'error' : ''}/>
            <input placeholder={'Phone number'} name={'phone'}
                   value={state.phone}
                   onChange={handleChange}
                   className={!validation.phone ? 'error' : ''}/>
            <input placeholder={'Password'} name={'password'}
                   type={'password'}
                   value={state.password}
                   onChange={handleChange}
                   className={!validation.password ? 'error' : ''}/>
            <input name={'submit'} type={'submit'} value={'SIGNUP'}
                   disabled={!Object.values(validation).every(e => e)}/>
            <Link to={'/user/login'}>Login</Link>
            {error.error && <Error message={error.message}/>}
            <Toast/>
        </form>
    )
}


