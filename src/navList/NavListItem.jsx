
import React from 'react';
import PropTypes from 'prop-types';
import { classList } from './helpers';

/**
 * NavListItem component
 * @param {object} route - object with the following keys: pageType, title, path
 *    @param {string} pageType - page type acossiated with route
 *    @param {node} title - title for NavListItem, 
 *    @param {string} path - path for "to" prop of NavLink component
 * @param {node} children - if route has subroutes NavList will be rendered as sub nav 
 */

const NavListItem = ({
  route = {},
  children = null,
  navLink: NavLink,
}) => {
  const { path, title, pageType } = route
  const classNameNavListItem = pageType && pageType.toLowerCase().replace('_', '-' )

  return (
    <li
      className={classList(
        "nav-list__item",
        classNameNavListItem,
      )}
    >
      <NavLink
        exact to={path}
        className="nav-list__link"
        activeClassName="nav-list__link--active"
      >
        {title}
      </NavLink>
      {children}
    </li>
  )
}

NavListItem.propTypes = {
  route: PropTypes.shape({
    pageType: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.node,
  }),
  children: PropTypes.node,
}

export default NavListItem;