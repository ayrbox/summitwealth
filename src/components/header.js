import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useStaticQuery, graphql, Link } from 'gatsby';

import logo from '../assets/images/logo.jpg';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      navigations: allNavigationsYaml {
        nodes {
          items {
            title
            path
            slug
          }
          path
          title
          slug
        }
      }
    }
  `);

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
        borderBottom: '1px solid #eee',
      }}
    >
      <Container>
        <Navbar light expand="md">
          <NavbarBrand to="/" tag={Link}>
            <img
              src={logo}
              className="rounded float-left"
              alt="Summit Wealth Logo"
            />
          </NavbarBrand>
          <NavbarToggler />
          <Collapse isOpen navbar>
            <Nav className="mr-auto" navbar>
              {data.navigations.nodes.map(({ slug, title, path, items }) => {
                if (items) {
                  return (
                    <UncontrolledDropdown nav inNavbar key={slug}>
                      <DropdownToggle nav caret>
                        {title}
                      </DropdownToggle>
                      <DropdownMenu right>
                        {items.map(i => (
                          <DropdownItem key={i.slug} to={i.path} tag={Link}>
                            {i.title}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  );
                } else {
                  return (
                    <NavItem key={slug}>
                      <NavLink to={path} tag={Link}>
                        {title}
                      </NavLink>
                    </NavItem>
                  );
                }
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
