import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { DrawerContext } from '../../contexts/DrawerContext';
import { Container } from './navbar.style';

const Navbar = ({ navbarStyle, logoStyle }) => {
  const data = useStaticQuery(graphql`
    query {
      summitWealthJson {
        menuData {
          path
          label
          offset
        }
        socialProfile {
          id
          icon
          link
        }
      }
    }
  `);

  const { state, dispatch } = useContext(DrawerContext);

  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <div {...navbarStyle}>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            variant="textButton"
            icon={<i className="flaticon-magnifying-glass" />}
            aria-label="search button"
          />
          <button
            variant="textButton"
            icon={<i className="flaticon-user" />}
            aria-label="registration button"
          />
          <button
            type="button"
            className={state.isOpen ? 'active' : ''}
            onClick={toggleHandler}
            aria-label="drawer toggle button"
          >
            Close
          </button>
        </div>
        <hr />
        <ul>
          {data.summitWealthJson.menuData.map(({
            path,
            label,
            offset,
          }) => (
            <li
              key={label}
              style={{ display: 'inline-block', marginRight: `${offset}px` }}
            >
              <a href={path}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: '128px',
    height: 'auto',
  },
};

export default Navbar;
