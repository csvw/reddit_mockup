import React, {Component} from 'react';
import './MainView.css';

export interface AdProps {ad: string}
interface AdState {}

export class Post extends Component<AdProps, AdState> {
    render() {
        return (
            <div className="adContainer">
                <img src={this.props.ad} />
            </div>
        );
    }
}