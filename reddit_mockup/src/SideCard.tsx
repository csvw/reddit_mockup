import React, {Component} from 'react';
import './MainView.css';

export interface CardProps {
    title: string;
    element: React.ReactNode;
}

interface CardState {}

export class SideCard extends Component<CardProps, CardState> {
    render() {
        return (
            <div className="cardContainer">
                <div className="cardTitle">
                    {this.props.title}
                </div>
                {this.props.element}
            </div>
        );
    }
}