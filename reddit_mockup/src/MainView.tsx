import React, {Component} from 'react';
import { Feed } from './Feed';
import { Sidebar } from './Sidebar';
import { PostProps } from './Post';
import './MainView.css';

interface ViewProps {}
interface ViewState {}

let dummyData: PostProps[] = []

for(let i = 0; i < 10; i++) {
    dummyData.push({
        title: 'De Finibus Bonorum et Malorum',
        author: 'Cicero',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: new Date(),
        image: 'None',
        numComments: 3
    });
}

export class MainView extends Component<ViewProps, ViewState> {
    render() {
        return (
            <div className="mainView">
                <div/>
                <Feed posts={dummyData}/>
                <Sidebar/>
                <div/>
            </div>
        );
    }
}