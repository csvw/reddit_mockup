import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import { CommunityStats } from './CommunityStats';
import { InfoCard } from './InfoCard';
import './MainView.css';

export interface CommunityProps {
    text: string;
    numMembers: string;
    numOnline: string;
}

interface CommunityState {}

export class CommunityCard extends Component<CommunityProps, CommunityState> {
    render() {
        return (
            <div className="communityContainer">
                <InfoCard text={this.props.text}/>
                <CommunityStats numMembers={this.props.numMembers} numOnline={this.props.numOnline}/>
                <hr className='communityHr'/>
                <div className="creationDate"><FontAwesomeIcon className='cake' icon={faBirthdayCake} />Created  on Jan 09, 2009</div>
            </div>
        );
    }
}