import React, {Component} from 'react';
import './MainView.css';

export interface LinkathonProps {}
interface LinkathonState {}

export class LinkathonCard extends Component<LinkathonProps, LinkathonState> {
    render() {
        return (
            <div className="linkathonCardContainer">
                <div className="top">
                    <div className="left">
                        <p className="linkathonCardText">Help</p>
                        <p className="linkathonCardText">Linkathon App</p>
                        <p className="linkathonCardText">Linkathon Coins</p>
                        <p className="linkathonCardText">Linkathon Premiums</p>
                        <p className="linkathonCardText">Linkathon Gifts</p>
                    </div>
                    <div className="right">
                        <p className="linkathonCardText">About</p>
                        <p className="linkathonCardText">Careers</p>
                        <p className="linkathonCardText">Press</p>
                        <p className="linkathonCardText">Advertise</p>
                        <p className="linkathonCardText">Blog</p>
                        <p className="linkathonCardText">Terms</p>
                        <p className="linkathonCardText">Content Policy</p>
                        <p className="linkathonCardText">Privacy Policy</p>
                        <p className="linkathonCardText">Mod Policy</p>
                    </div>
                </div>
                <div className="bottom">
                    <p className="linkathonCardText">Linkathon 2020. No rights reserved</p> 
                </div>
            </div>
        );
    }
}