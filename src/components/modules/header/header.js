import React, { Component } from 'react';
import './header.scss';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
class Header extends Component {
    constructor(props) {
        super(props);
        this.menuSelected = this.menuSelected.bind(this);
    }
    render() {
        const {user} = this.props;
        return (
            <header ref="header">
                <div class="wrapper app-spacing header-container">
                    <Link to="/" id="logo" title="ABC" onClick={this.menuSelected}>
                        <i class="fa fa-bed"></i>
                    </Link>
                    <div id="picklist" class="fa" onClick={() => this.showMobileMenu()}></div>
                    <div id="menu">
                        <nav>
                            <ul>
                                <li><NavLink to="/" title="Home" exact onClick={this.menuSelected}>Home</NavLink></li>
                                {user && user.role.toLowerCase() === 'admin' &&
                                    <li><NavLink to="/admin" title="Admin" onClick={this.menuSelected}>Admin</NavLink></li>
                                }
                                <li>
                                    <select title="Choose Language" onChange={this.menuSelected}>
                                        <option>English</option>
                                        <option>German</option>
                                    </select>
                                </li>
                                <li>
                                    <select title="Choose Currency" onChange={this.menuSelected}>
                                        <option>INR</option>
                                        <option>USD</option>
                                    </select>
                                </li>
                            </ul>
                        </nav>
                        <div id="user-info"><span title={'Logged in as '+ user.firstname + ' ' + user.lastname}>{user.firstname+ ' '+ user.lastname}</span></div>
                    </div>
                </div>
            </header>
        )
    }

    menuSelected() {
        const classList = this.refs.header.classList;
        classList.remove('open');
        document.getElementById('overlay').classList.remove("show");
    }

    showMobileMenu() {
        const classList = this.refs.header.classList;
        if(classList.contains("open")) {
            this.menuSelected();
        } else {
            classList.add('open');
            document.getElementById('overlay').classList.add("show");
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.app.user
    }
};

export default withRouter(connect(mapStateToProps)(Header));
