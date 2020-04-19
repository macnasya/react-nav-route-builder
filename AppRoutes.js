import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * AppRoutes component
 * @param {array} routes - array of objects with the following keys: pageType, title, path
 * @param {object} props - props of Router component
 */

export const redirectToRoute = (props, pathname, checkIsRedirect = () => false) => {
  const { location } = props || {}
  const isRedirect = checkIsRedirect()

  if (isRedirect) return (
    <Redirect
      to={{
        pathname,
        state: { from: location }
      }}
    />
  )
  return null
}

const AppRoutes = ({
  routes = [],
  ...props
}) => {

  for (let route of routes) {
    const {
      path,
      component: Component,
      routes,
      exact,
      redirect,
    } = route
    const  { location } = props || {}
    const  { pathname } = location || {}
    const hasSubRoute = routes && routes.length
    const isRouteMatched = pathname === path
    const isSubRouteMatched = hasSubRoute && pathname && pathname.includes(path)
    const RedirectComponent = redirect ? redirect(props)  : null

    if (isRouteMatched || isSubRouteMatched) return (
      <Route
        path={path}
        key={path}
        exact={exact}
        render={props => 
          RedirectComponent ? (
            RedirectComponent
          ) : (
            <>
              <Component {...props} routes={routes} />
              {hasSubRoute && <AppRoutes routes={routes} {... props} />}
            </>
          )
        }
      >
      </Route>
    )
  }
  return null
}

AppRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      pageType: PropTypes.string,
      title: PropTypes.string,
      path: PropTypes.string,
      component: PropTypes.node,
      exact: PropTypes.bool,
      redirect: PropTypes.func,
  })),
}

export default AppRoutes;