import React, {Component} from 'react';
import './MainView.css';

export interface InfoProps {
    text: string;
}

interface InfoState {}

export class InfoCard extends Component<InfoProps, InfoState> {
    render() {
        return (
            <div className="infoContainer">
                {this.props.text}
            </div>
        );
    }
}