import React, {Component} from 'react';
import './MainView.css';

export interface StatProps {
    numMembers: string;
    numOnline: string;
}

interface StatState {}

export class CommunityStats extends Component<StatProps, StatState> {
    render() {
        return (
            <div className="statsContainer">
                <div className="membersContainer">
                    <div className='numMembers'>{this.props.numMembers}</div>
                    <div className='membersCaption caption'>Members</div>
                </div>
                <div className="onlineContainer">
                    <div className='numOnline'>{this.props.numOnline}</div>
                    <div className='onlineCaption caption'>Online</div>
                </div>
            </div>
        );
    }
}