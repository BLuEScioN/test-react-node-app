import * as React from 'react';
import '../styles/SearchBar.scss';

export interface ISearchBarProps {
    onSearchTermChange: (e) => void;
    searchTerm: string;
}

export class SearchBar extends React.Component<ISearchBarProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchTerm, onSearchTermChange } = this.props;
        return (
            <div className='search-bar'>
                <input  
                    placeholder='Search'
                    value={searchTerm}
                    onChange={onSearchTermChange}
                ></input>
            </div>
        )
    }

}