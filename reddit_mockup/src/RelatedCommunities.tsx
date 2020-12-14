import React, {Component} from 'react';
import { CommunityLink, CommunityProps } from './CommunityLink';
import { faSun, faKeyboard, faCode, faLaptop, faLaptopCode, faTerminal } from '@fortawesome/free-solid-svg-icons';
import './MainView.css';

interface RelatedCommunityProps {}
interface RelatedCommunityState {}

let dummyData: CommunityProps[] = [
    {title: "r/Frontend", numMembers: 113541, icon: faLaptopCode, color: "#7777FF", background: "white"},
    {title: "r/web_design", numMembers: 508898, icon: faSun, color: "white", background: "#DD2200"},
    {title: "r/SideProject", numMembers: 65212, icon: faSun, color: "white", background: "#DD2200"},
    {title: "r/learnjavascript", numMembers: 142287, icon: faCode, color: "black", background: "#EEDD77"},
    {title: "r/css", numMembers: 77342, icon: faSun, color: "white", background: "#DD2200"},
    {title: "r/learnprogramming", numMembers: 1896238, icon: faLaptop, color: "black", background: "white"},
    {title: "r/UI_Design", numMembers: 43348, icon: faSun, color: "white", background: "#DD2200"},
    {title: "r/javascript", numMembers: 1275907, icon: faTerminal, color: "#4477EE", background: "#BBEEFF"},
    {title: "r/UXDesign", numMembers: 40813, icon: faSun, color: "white", background: "#DD2200"},
    {title: "r/HTML", numMembers: 27430, icon: faKeyboard, color: "black", background: "#66BBFF"},
]

export class RelatedCommunitiesCard extends Component<RelatedCommunityProps, RelatedCommunityState> {
    render() {
        return (
            <div className="relatedCommunitiesContainer">
                {dummyData.map((e) => <CommunityLink title={e.title} numMembers={e.numMembers} icon={e.icon} color={e.color} background={e.background}/>)}
            </div>
        );
    }
}