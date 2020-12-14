import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


interface SearchProps {}
interface SearchState {}

export class Search extends Component<SearchProps, SearchState> {
    render() {
        return (
            <div className="searchContainer">
                <FontAwesomeIcon icon={faSearch} className="searchIcon"></FontAwesomeIcon>
                <input type="text" placeholder="Search" className="search"></input>
            </div>
        );
    }
}