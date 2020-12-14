import { faComment, faEllipsisH, faSave, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import './MainView.css';

interface OptionsProps {numComments?: number}
interface OptionsState {}

export class PostOptions extends Component<OptionsProps, OptionsState> {
    constructor(props: OptionsProps) {
        super(props);
    }
    render() {
        return (
            <div className="optionsContainer">
                <div className="comments optionContainer">
                    <FontAwesomeIcon icon={faComment}/>
                    <p className="commentText">{this.props.numComments} Comments</p>
                </div>
                <div className="share optionIcon optionContainer">
                    <FontAwesomeIcon icon={faShare}/>
                    <p className="share"> Share</p>
                </div>
                <div className="save optionIcon optionContainer">
                    <FontAwesomeIcon icon={faSave}/>
                    <p className="save"> Save</p>

                </div>
                <div className="elipsis optionIcon">
                    <FontAwesomeIcon icon={faEllipsisH}/>
                </div>
            </div>
        );
    }
}