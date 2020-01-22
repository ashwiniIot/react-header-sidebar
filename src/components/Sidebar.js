import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;   
    height: 100%;
    width: 230px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.7em;      /* Stay at the top */
    background-color: #fff; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
    border: solid 1px lightgrey;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: 'Device',
                  css: 'fas fa-digital-tachograph',
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/organization',
                  name: 'Organization',
                  css: 'fa fa-wifi',
                  key: 2
                },
                {
                  path: '/Settings',
                  name: 'Settings',
                  css: 'fas fa-cogs',
                  key: 3
                },
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 75px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-left: 1em;
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 1.7em;
        color: ${(props) => props.active ? "#565656" : "DarkGray"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} tabIndex="name" className={this.props.css} onClick={this.handleClick}>
               { this.props.name}
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`

`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}