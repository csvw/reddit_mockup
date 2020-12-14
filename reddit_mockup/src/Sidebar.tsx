import React, {Component} from 'react';
import { SideCard, CardProps } from './SideCard';
import { CommunityCard } from './CommunityCard';
import { RelatedCommunitiesCard } from './RelatedCommunities';
import { InfoCard } from './InfoCard';

import './MainView.css';
import { LinkathonCard } from './LinkathonCard';

interface SidebarProps {}
interface SidebarState {}

export class Sidebar extends Component<SidebarProps, SidebarState> {
    render() {
        return (
            <div className="sidebarContainer">
                <SideCard
                title="About Community"
                element={
                    <CommunityCard 
                    text='/r/webdev is a community dedicated to all things web development: front-end and back-end. For questions related to web design, try r/web_design.'
                    numMembers='640k'
                    numOnline='854'
                    />
                }/>
                <SideCard 
                title="Related Communities"
                element={<RelatedCommunitiesCard/>}
                />
                <div className="stickyScroll">
                    <LinkathonCard />
                    <div className="backToTopContainer">
                        <div className="backToTop">
                            BACK TO TOP
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}