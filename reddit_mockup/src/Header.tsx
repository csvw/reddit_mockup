import React, {Component} from 'react';
import { Logo } from './Logo';
import { Search } from './Search';
import { UserMenu } from './UserMenu';
import './Header.css';

interface HeaderProps {}
interface HeaderState {}

export class Header extends Component<HeaderProps, HeaderState> {
    render() {
        return (
            <header className='header'>
                <Logo/>
                <div/>
                <Search/>
                <div/>
                <UserMenu/>
            </header>
        );
    }
}