import React from 'react';
import {useSelector} from 'react-redux'
import {selectCompletedTodos} from '../../../store/todo/todoSlice'

export default function Completed() {
    const todo = useSelector(selectCompletedTodos)
    return (
        <div className={'completed'}>
            <h2 style={{margin: 0}}> COMPLETED</h2>
            {
                todo.map((todo: any) => <TaskCard key={todo.taskId} title={todo.title}/>)
            }
            {
                todo.length < 1 && "Start by completing your first task"
            }
        </div>
    )
}


function TaskCard({title}: { title: string }) {
    return (
        <div className={'task-card'}>
            <p>{title}</p>
        </div>
    )
}