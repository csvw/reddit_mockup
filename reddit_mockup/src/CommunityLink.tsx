import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React, {Component} from 'react';
import './MainView.css';


export interface CommunityProps {
    title: string;
    numMembers: number;
    icon: IconDefinition;
    color: string;
    background: string;
}

interface CommunityState {}

export class CommunityLink extends Component<CommunityProps, CommunityState> {
    render() {
        return (
            <div className="communityLinkContainer">
                <div className="communityLinkLeft">
                    <FontAwesomeIcon className="communityLinkIcon fa-fw" icon={this.props.icon} style={{color: this.props.color, background: this.props.background}} />
                    <div className="communityLinkInfo">
                        <div className="communityLinkTitle">{this.props.title}</div>
                        <div className="communityLinkMembers">{this.props.numMembers.toLocaleString()} members</div>
                    </div>
                </div>
                <div className="communityLinkJoin">
                    <p>JOIN</p>
                </div>
            </div>
        );
    }
}