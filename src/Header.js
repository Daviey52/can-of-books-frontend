import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log('app', this.props.auth0, user);
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link className="home" to="/">Home</Link>
        <Link className="profile" to="/profile">Profile</Link>
        {/* Done: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {isAuthenticated ? <LogoutButton className="button" /> : <LoginButton className="button" />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
