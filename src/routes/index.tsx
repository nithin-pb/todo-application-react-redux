import React from 'react'
import {Route, Switch, Redirect} from "react-router-dom";
import Pending from '../components/Task/Pending'
import Completed from "../components/Task/Completed";
import User, {Login, Signup} from "../components/User";
import Task from "../components/Task";
import Private from "./Private";
import {useSelector} from "react-redux";
import {userStatus} from "../store/user/userSlice";

export default function MainRoute() {
    const status = useSelector(userStatus)
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/user"/>
            </Route>
            <Route path="/user" component={User}/>
            <Private
                path="/task"
                component={Task}
                isAuth={status}
            />
            <Route path="*">
                <Redirect to="/user"/>
            </Route>
        </Switch>
    )
}


export function TaskRoute() {
    return (
        <Switch>
            <Route exact path="/task">
                <Redirect to="/task/pending"/>
            </Route>
            <Route path="/task/completed" component={Completed}/>
            <Route path="/task/pending" component={Pending}/>
        </Switch>
    )
}

export function UserRoute() {
    return (
        <Switch>
            <Route exact path="/user">
                <Redirect to="/user/login"/>
            </Route>
            <Route path="/user/login" component={Login}/>
            <Route path="/user/signup" component={Signup}/>
        </Switch>
    )
}