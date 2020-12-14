import React, {Component} from 'react';
import {Dropdown} from './Dropdown';

interface MenuProps {}
interface MenuState {}

export class UserMenu extends Component<MenuProps, MenuState> {
    render() {
        return (
            <div className="userMenu">
                <button className="loginButton">LOG IN</button>
                <button className="signupButton">SIGN UP</button>
                <Dropdown/>
            </div>
        );
    }
}