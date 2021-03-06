import React from 'react';
import PropTypes from 'prop-types';
import { classList } from './helpers';
import NavListItem from './NavListItem';

/**
 * NavList component
 * @param {array} routes - array of objects with the following keys: pageType, title, path
 * @param {string} className - additional className for nav-list
 * @param {boolean} isSubNav - whether NavList is sub nav or not
 */

const NavList = ({
  routes = [],
  className,
  isSubNav,
  navLink,
}) => {
  return (
    <ul className={classList(
      'nav-list',
      className && className,
      isSubNav && 'nav-list--sub-nav'
    )}>
      {routes.map((route) => {
        const { path, routes } = route
        const hasSubNav = routes && routes.length
        return (
          <NavListItem key={path} route={route} navLink={navLink}>
            {hasSubNav && <NavList routes={routes} navLink={navLink} isSubNav />}
          </NavListItem>
        )
      }, NavList)}
    </ul>
  )
}

NavList.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      pageType: PropTypes.string,
      title: PropTypes.node,
      path: PropTypes.string,
      component: PropTypes.any,
      exact: PropTypes.bool,
      redirect: PropTypes.func,
  })),
  className: PropTypes.string,
  isSubNav: PropTypes.bool,
}

export default NavList