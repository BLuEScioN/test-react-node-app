import * as React from 'react';
import { Search } from './Search';

export interface INavProps {
    onSearchInputEnter: () => void
    onSearchInputChange: (searchInput: string) => void
}

export const Nav = ({ onSearchInputChange, onSearchInputEnter }: INavProps) => (
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <Search onSearchInputChange={onSearchInputChange} onSearchInputEnter={onSearchInputEnter}/>
      </div>
    </nav>
);