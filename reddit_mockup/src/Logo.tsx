import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot }  from '@fortawesome/free-solid-svg-icons';
import React, {Component} from 'react';

interface LogoProps {}
interface LogoState {}

export class Logo extends Component<LogoProps, LogoState> {
    render() {
        return (
            <div className="logoContainer">
                <div className="logo">
                    <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>
                </div>
                <p><u className="underlined">link</u>athon</p>
            </div>
        );
    }
}