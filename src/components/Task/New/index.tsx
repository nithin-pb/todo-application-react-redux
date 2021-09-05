import React, {useState} from 'react';
import {createNewTodoItem} from '../../../store/todo/todoSlice'
import {useDispatch} from "react-redux";
import {toast} from 'react-toastify';
import Toast from "../../../shared/Toast";

export default function New() {
    const dispatch = useDispatch()
    const [inputState, setInputState] = useState('');


    const handleSubmit = () => {
        dispatch(createNewTodoItem({title: inputState}));
        setInputState('');
        toast("New item added to pending list");
    }
    return (
        <div className={'new extra-properties'}>
            <div className={'input-wrapper'}>
                <input placeholder={'Title'} value={inputState} onChange={(e) => setInputState(e.target.value)}/>
                <button onClick={() => handleSubmit()} className={'button'} disabled={!inputState}>ADD</button>
            </div>
            <Toast/>
        </div>
    )
}
