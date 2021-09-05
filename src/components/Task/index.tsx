import React from 'react';
import './index.scss';
import New from "./New";
import {TaskRoute} from "../../routes";
import Header from "../Header";


export default function Task() {
    return (
        <div>
            <Header/>
            <div className={'master-container task-container'}>
                <New/>
                <div className={'task-wrapper extra-properties'}>
                    <TaskRoute/>
                </div>
            </div>
        </div>
    )
}