import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface DropdownProps {}
interface DropdownState {
    links: string[],
    icons: IconDefinition[]
}

export class Dropdown extends Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps) {
        super(props);
        this.state = {
            links: [
            "Linkathon Coins",
            "Linkathon Premium",
            "Help Center",
            "Log In / Sign Up"
            ],
            icons: [
                faCoffee
            ]
        }
            
    
    }
    
    render() {
        return (
            <div className="dropdownContainer">
            <button className="dropdownButton">
                <FontAwesomeIcon icon={faUser}/>
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
            <div className="dropdownLinks">
            {this.state.links.map((text) =>
                <div className="dropdownLink"><FontAwesomeIcon icon={faCoffee} />{text}</div>
            )}
            </div>
            </div>
        );
    }
}