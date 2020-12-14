import React, {Component} from 'react';
import { PostVotes } from './Upvotes';
import { PostContent } from './Contents';
import { PostOptions } from './PostOptions';
import './MainView.css';

export interface PostProps {
    title: string;
    author: string;
    date: Date;
    numComments?: number;
    text?: string;
    image?: string;
}

interface PostState {}

export class Post extends Component<PostProps, PostState> {
    render() {
        return (
            <div className="postContainer">
                <PostVotes/>
                <div className="flex-col">
                    <PostContent 
                    title={this.props.title}
                    author={this.props.author}
                    date={this.props.date}
                    text={this.props.text}
                    image={this.props.image}
                    />
                    <PostOptions
                    numComments={this.props.numComments}
                    />
                </div>
            </div>
        );
    }
}