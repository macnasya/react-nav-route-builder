# react-nav-route-builder

## AppRoutes
Builds component tree and manages routes and subroutes using single routes configuration file 

Routes builder usage example: 
```javaScript
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import { AppRoutes, NavList, redirectToRoute } from "react-nav-route-builder"

<Router>
    <Suspense fallback="is loading ...">
    <div className="App">
        <Header />
        <Switch>
        <Route
            path="/"
            render={(props) => (
                <AppRoutes routes={routesConfig} {...props} route={Route} redirect={Redirect} />
            )}
        >
        </Route>
        </Switch>
        <Footer />
    </div>
    </Suspense>
</Router>
```

Route config example:
```javaScript
const routesConfig = [
  {
    pageType: 'HOME',
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    pageType: 'Menu item 1',
    title: <span style={{color: 'red'}}>Menu item 1</span>,
    path: '/item-1',
    component: ArticleFirst,
    routes: [{
      title: 'Home Submenu',
      path: '/item-1/submenu',
      component: HomeSubComponent,
      redirect: ({...props}) => redirectToRoute(props, "/about", () => {
        return !props.location.pathname.includes('item-1')
      }),
      routes: [{
        title: 'Home Submenu Submenu',
        path: '/item-1/submenu/submenu',
        component: HomeSubComponent,
      }],
    }],
  },
  {
    pageType: 'About',
    title: 'About',
    path: '/about',
    component: About,
  },
];
```
## NavList
Renders navigation components tree using routes configuration.

NavList usage example:
```javaScript
<NavList navLink={NavLink} routes={routesConfig} classNameList="main-header__nav-list" />
```