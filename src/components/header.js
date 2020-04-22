import React from 'react';
import PropTypes from 'prop-types';
import {
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
  const contents = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              path
              category
            }
          }
        }
      }
    }
  `);

  const data = contents.allMarkdownRemark.edges
    .map(({ node }) => ({
      id: node.id,
      path: node.frontmatter.path,
      title: node.frontmatter.title,
      category: node.frontmatter.category,
      type: 'item',
    }))
    .reduce((navbarItems, item) => {
      if (!item.category) {
        navbarItems[item.id] = item;
      } else {
        navbarItems[item.category] = navbarItems[item.category] || {
          type: 'category',
          items: [],
        };
        navbarItems[item.category]['items'].push(item);
      }
      return navbarItems;
    }, {});
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img
            src={logo}
            className="rounded float-left"
            alt="Summit Wealth Logo"
          />
        </NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen navbar>
          <Nav className="mr-auto" navbar>
            {Object.keys(data).map(navKey => {
              const navItem = data[navKey];
              if (navItem.type === 'category') {
                return (
                  <UncontrolledDropdown nav inNavbar key={navKey}>
                    <DropdownToggle nav caret>
                      {navKey}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {navItem.items.map(i => (
                        <DropdownItem key={i.id} to={i.path} tag={Link}>
                          {i.title}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                );
              } else {
                return (
                  <NavItem key={navKey}>
                    <NavLink to={navItem.path} tag={Link}>
                      {navItem.title}
                    </NavLink>
                  </NavItem>
                );
              }
            })}
          </Nav>
        </Collapse>
      </Navbar>
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
