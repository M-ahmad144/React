import React from 'react';
import MenuList from './menu-list';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TreeView({ menus = [] }) {
    return (
        <div className="d-flex">
            <div className="sidebar bg-light p-3 vh-100" style={{ width: '250px' }}>
                <MenuList list={menus} />
            </div>
            <div className="content p-3 flex-grow-1">
                {/* Your main content goes here */}
                <h1>Main Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>




            </div>
        </div>
    );
}
