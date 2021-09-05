import React from 'react';
import {useHistory} from "react-router-dom";
import {emptyTaskList} from "../../../store/todo/todoSlice";
import {useDispatch} from "react-redux";
import {logout} from "../../../store/user/userSlice";

export default function Logout() {
    const dispatch = useDispatch()
    let history = useHistory();
    const handleLogout = () => {
        dispatch(logout());
        dispatch(emptyTaskList());
        history.replace(`/user/login`, 'newState');
    }

    return (
        <div>
            <p className={'logout'} onClick={handleLogout}> LOGOUT </p>
        </div>
    );
}
