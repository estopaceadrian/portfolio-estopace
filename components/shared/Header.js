import React, { useState } from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const BsNavLink = (props) => {
  const { href, title } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const BsNavBrand = () => (
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">Adrian Estopace</a>
  </Link>
);

const LoginLink = () => <BsNavLink href="/api/v1/login" title="Login" />;

const LogoutLink = () => <BsNavLink href="/api/v1/logout" title="Logout" />;

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className} `}
        // color="transparent"
        dark
        expand="md"
      >
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-lg-between">
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="CV" />
            </NavItem>
            {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="SecretSSR" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="Admin" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="AdminSSR" />
            </NavItem> */}
          </Nav>
          <Nav navbar>
            {!loading && (
              <>
                {user && (
                  <NavItem className="port-navbar-item">
                    <LogoutLink />
                  </NavItem>
                )}
                {!user && (
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                )}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
