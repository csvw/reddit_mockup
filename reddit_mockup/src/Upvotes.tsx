import React, {Component} from 'react';
import { faArrowUp, faArrowDown }  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './MainView.css';

interface VoteProps {initialVotes?: number}
interface VoteState {upvotes: number};

export class PostVotes extends Component<VoteProps, VoteState> {
    constructor(props: VoteProps) {
        super(props);
        if (typeof this.props.initialVotes !== 'undefined') {
            this.state = {upvotes: this.props.initialVotes};
        }
        else {
            this.state = {upvotes: 0};
        }
    }

    render() {
        return (
            <div className="votesContainer">
                <FontAwesomeIcon className="voteIcon" icon={faArrowUp}/>
                <p className="votes">{this.state.upvotes}</p>
                <FontAwesomeIcon className="voteIcon" icon={faArrowDown}/>
            </div>
        );
    }
}