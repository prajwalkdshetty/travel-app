import React from 'react';
import './admin.scss';
import { NavLink } from 'react-router-dom';

const Admin = () => {
    return (
        <div class="app-spacing wrapper">
            <div id="admin" class="box">

                <h3>Select an Operation</h3>
                <NavLink to="/admin/addItems" exact class="button button-1">Add Items</NavLink>
                <NavLink to="/admin/removeItems" exact class="button button-1">Remove Items</NavLink>
            </div>
        </div>
    )
}

export default Admin;