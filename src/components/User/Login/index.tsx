import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import useForm from "../../../hooks/useForm";
import useValidation from "../../../hooks/useValidation";
import {useSelector} from "react-redux";
import {login, updateUserStatus} from "../../../store/user/userSlice";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import Error from "../../../shared/Error";

export default function Login() {
    return (
        <div style={{width: '100%'}} className={'login-container'}>
            <h2 className={'h2'}> Login </h2>
            <LoginForm/>
        </div>
    );
}


function LoginForm() {
    let history = useHistory();
    const users = useSelector(login)
    const [error, setError] = useState({error: false, message: ''})
    const [state, setState] = useForm({email: '', password: ''})
    const [validation, setValidation] = useValidation({email: true, password: true});
    const dispatch = useDispatch()

    const handleChange = (e: any) => {
        setState(e);
        setValidation(e.target.name, e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setError({error: false, message: ''})
        const loginState = users.some((user: any) => user.email === state.email && user.password === state.password);
        if (loginState) {
            dispatch(updateUserStatus({status: true}));
            history.push("/task");
        } else {
            setError({error: true, message: 'Email/password incorrect'})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder={'Email'}
                   name={'email'}
                   value={state.email}
                   onChange={handleChange}
                   className={!validation.email ? 'error' : ''}/>
            <input placeholder={'Password'}
                   name={'password'}
                   type={'password'}
                   value={state.password}
                   onChange={handleChange}
                   className={!validation.password ? 'error' : ''}/>
            <input name={'submit'} type={'submit'} value={'LOGIN'} disabled={!Object.values(validation).every(e => e)}/>
            <Link to={'/user/signup'}>Signup</Link>
            {error.error && <Error message={error.message}/>}
        </form>
    )
}


