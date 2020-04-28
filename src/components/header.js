import React, { useState } from 'react';
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
import Img from 'gatsby-image';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
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
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const handleMenuToggle = e => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  return (
    <header
      style={{
        borderBottom: '1px solid #eee',
      }}
    >
      <Container>
        <Navbar light expand="md">
          <NavbarBrand to="/" tag={Link}>
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt="Summit Wealth Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={handleMenuToggle} />
          <Collapse isOpen={isOpen} navbar>
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

export default Header;
