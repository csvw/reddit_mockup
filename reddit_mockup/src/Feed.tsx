import React, {Component} from 'react';
import { Post, PostProps } from './Post';
import './MainView.css';

interface FeedProps {posts: PostProps[]}
interface FeedState {}

export class Feed extends Component<FeedProps, FeedState> {
    render() {
        return (
            <div className="feedContainer">
                {this.props.posts.map((post) => 
                    <Post title={post.title}
                    author={post.author}
                    text={post.text}
                    numComments={post.numComments}
                    date={post.date}
                    />
                )}
            </div>
        );
    }
}