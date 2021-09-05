import React from "react";
import {Route, Redirect} from "react-router-dom";

type Props = {
    isAuth: boolean,
    component: any
    path: string
}

export default function Private(props: Props) {
    const {isAuth, component: Component, path, ...rest} = {...props}
    return (
        <Route {...rest}
               render={(props) => {
                   if (isAuth) {
                       return <Component/>;
                   } else {
                       return (
                           <Redirect
                               to={{pathname: "/user/login", state: {from: props.location}}}
                           />
                       );
                   }
               }}/>
    );
}
