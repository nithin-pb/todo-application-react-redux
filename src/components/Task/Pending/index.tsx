import React from 'react';
import {useSelector} from 'react-redux'
import {selectPendingTodos} from '../../../store/todo/todoSlice'
import {completeTodoTask} from '../../../store/todo/todoSlice'
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import Toast from "../../../shared/Toast";

export default function Pending() {
    const todo = useSelector(selectPendingTodos)
    const dispatch = useDispatch()
    const handleChange = (e: any, id: number) => {
        dispatch(completeTodoTask({taskId: id, checked: e}))
        toast("Task moved to completed list");
    }

    return (
        <div className={'completed'}>
            <h2 style={{margin: 0}}>PENDING</h2>
            {
                todo.map((todo: any) => <TaskCard
                    key={todo.taskId}
                    taskId={todo.taskId}
                    title={todo.title}
                    onChange={async (e, id) => handleChange(e, id)}
                    completed={todo.completed}/>)
            }
            {
                todo.length < 1 && "Start by adding your FIRST TODO"
            }
            <Toast/>
        </div>
    )
}

type Props = {
    title: string,
    completed: boolean,
    taskId: number,
    onChange: (e: any, taskId: number) => {}
}

function TaskCard(props: Props) {
    const {title, completed, taskId} = {...props}


    return (
        <div className={'task-card'}>
            <p className={'inner-text'}>
                {title}
            </p>
            <label>
                <input type={'checkbox'}
                       onChange={(e: any) => props.onChange(e.target.checked, taskId)}/>
            </label>
        </div>
    )
}