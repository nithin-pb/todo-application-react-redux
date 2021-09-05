import React from 'react';
import './index.scss';
import {NavLink} from "react-router-dom";
import Logout from "../User/Logout";

export default function Header() {
    return (
        <header>
            <div className='header-wrapper master-container'>
                <h2>
                    TODO
                </h2>
                <ul className={'navigation-links'}>
                    <li>
                        <NavLink to={'/task/pending'}>PENDING</NavLink>

                    </li>
                    <li>
                        <NavLink to={'/task/completed'}>COMPLETED</NavLink>
                    </li>
                </ul>
                <Logout/>
            </div>
        </header>
    );
}
