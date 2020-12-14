import React, {Component} from 'react';
import './MainView.css';

interface ContentProps {
    title: string;
    author: string;
    date: Date;
    text?: string;
    image?: string;
}

interface ContentState {}

export class PostContent extends Component<ContentProps, ContentState> {
    render() {
        let content;
        if (this.props.image === "None") {
            content = <img src={this.props.image}/>
        } else {
            content = <p className="textContent">{this.props.text}</p>
        }
        return (
            <div className="contentContainer">
                <p className="contentAuthor">Posted by {this.props.author}</p>
                <p className="contentTitle">{this.props.title}</p>
                {content}
            </div>
        );
    }
}