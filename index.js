"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.redirectToRoute = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * AppRoutes component
 * @param {array} routes - array of objects with the following keys: pageType, title, path
 * @param {object} props - props of Router component
 */
var redirectToRoute = function redirectToRoute(props, pathname) {
  var checkIsRedirect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return false;
  };

  var _ref = props || {},
      location = _ref.location;

  var isRedirect = checkIsRedirect();
  if (isRedirect) return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
    to: {
      pathname: pathname,
      state: {
        from: location
      }
    }
  });
  return null;
};

exports.redirectToRoute = redirectToRoute;

var AppRoutes = function AppRoutes(_ref2) {
  var _ref2$routes = _ref2.routes,
      routes = _ref2$routes === void 0 ? [] : _ref2$routes,
      props = _objectWithoutProperties(_ref2, ["routes"]);

  var _iterator = _createForOfIteratorHelper(routes),
      _step;

  try {
    var _loop = function _loop() {
      var route = _step.value;
      var path = route.path,
          Component = route.component,
          routes = route.routes,
          exact = route.exact,
          redirect = route.redirect;

      var _ref3 = props || {},
          location = _ref3.location;

      var _ref4 = location || {},
          pathname = _ref4.pathname;

      var hasSubRoute = routes && routes.length;
      var isRouteMatched = pathname === path;
      var isSubRouteMatched = hasSubRoute && pathname && pathname.includes(path);
      var RedirectComponent = redirect ? redirect(props) : null;
      if (isRouteMatched || isSubRouteMatched) return {
        v: /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
          path: path,
          key: path,
          exact: exact,
          render: function render(props) {
            return RedirectComponent ? RedirectComponent : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
              routes: routes
            })), hasSubRoute && /*#__PURE__*/_react["default"].createElement(AppRoutes, _extends({
              routes: routes
            }, props)));
          }
        })
      };
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (_typeof(_ret) === "object") return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
};

AppRoutes.propTypes = {
  routes: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    pageType: _propTypes["default"].string,
    title: _propTypes["default"].string,
    path: _propTypes["default"].string,
    component: _propTypes["default"].node,
    exact: _propTypes["default"].bool,
    redirect: _propTypes["default"].func
  }))
};
var _default = AppRoutes;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classList = void 0;

var classList = function classList() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(function (item) {
    return !!item;
  }).join(' ');
};

exports.classList = classList;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AppRoutes", {
  enumerable: true,
  get: function get() {
    return _AppRoutes["default"];
  }
});
Object.defineProperty(exports, "redirectToRoute", {
  enumerable: true,
  get: function get() {
    return _AppRoutes.redirectToRoute;
  }
});
Object.defineProperty(exports, "NavList", {
  enumerable: true,
  get: function get() {
    return _navList["default"];
  }
});

var _AppRoutes = _interopRequireWildcard(require("./AppRoutes"));

var _navList = _interopRequireDefault(require("./navList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../helpers");

var _NavListItem = _interopRequireDefault(require("./NavListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * NavList component
 * @param {array} routes - array of objects with the following keys: pageType, title, path
 * @param {string} className - additional className for nav-list
 * @param {boolean} isSubNav - whether NavList is sub nav or not
 */
var NavList = function NavList(_ref) {
  var _ref$routes = _ref.routes,
      routes = _ref$routes === void 0 ? [] : _ref$routes,
      className = _ref.className,
      isSubNav = _ref.isSubNav;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _helpers.classList)('nav-list', className && className, isSubNav && 'nav-list--sub-nav')
  }, routes.map(function (route) {
    var path = route.path,
        routes = route.routes;
    var hasSubNav = routes && routes.length;
    return /*#__PURE__*/_react["default"].createElement(_NavListItem["default"], {
      key: path,
      route: route
    }, hasSubNav && /*#__PURE__*/_react["default"].createElement(NavList, {
      routes: routes,
      isSubNav: true
    }));
  }, NavList));
};

NavList.propTypes = {
  routes: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    pageType: _propTypes["default"].string,
    title: _propTypes["default"].string,
    path: _propTypes["default"].string,
    component: _propTypes["default"].node,
    exact: _propTypes["default"].bool,
    redirect: _propTypes["default"].func
  })),
  className: _propTypes["default"].string,
  isSubNav: _propTypes["default"].bool
};
var _default = NavList;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * NavListItem component
 * @param {object} route - object with the following keys: pageType, title, path
 *    @param {string} pageType - page type acossiated with route
 *    @param {node} title - title for NavListItem, 
 *    @param {string} path - path for "to" prop of NavLink component
 * @param {node} children - if route has subroutes NavList will be rendered as sub nav 
 */
var NavListItem = function NavListItem(_ref) {
  var _ref$route = _ref.route,
      route = _ref$route === void 0 ? {} : _ref$route,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children;
  var path = route.path,
      title = route.title,
      pageType = route.pageType;
  var classNameNavListItem = pageType && pageType.toLowerCase().replace('_', '-');
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _helpers.classList)("nav-list__item", classNameNavListItem)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: path,
    className: "nav-list__link",
    activeClassName: "nav-list__link--active"
  }, title), children);
};

NavListItem.propTypes = {
  route: _propTypes["default"].shape({
    pageType: _propTypes["default"].string,
    path: _propTypes["default"].string,
    title: _propTypes["default"].node
  }),
  children: _propTypes["default"].node
};
var _default = NavListItem;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _NavList["default"];
  }
});

var _NavList = _interopRequireDefault(require("./NavList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
