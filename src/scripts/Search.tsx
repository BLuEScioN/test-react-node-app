import * as React from 'react';

export interface ISearchProps {
    onSearchInputEnter: () => void;
    onSearchInputChange: (searchInput: string) => void;
}
export const Search = ({ onSearchInputChange, onSearchInputEnter }: ISearchProps) => (
    <div className="search-bar form-inline">
        <input
            className="form-control" 
            type="text" 
            onChange={(e: React.ChangeEvent<HTMLButtonElement>) => onSearchInputChange(e.target.value)}
            onKeyPress={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === 'Enter') { 
                    onSearchInputEnter() 
                }
            }}
        />
        <button className="btn hidden-sm-down">
            <span className="glyphicon glyphicon-search"></span>
        </button>
    </div> 
);
  