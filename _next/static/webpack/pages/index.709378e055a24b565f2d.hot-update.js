webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Dev\\tailwind-starter-kit\\Landing Page\\next-landing-page\\components\\Navbar.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Navbar(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      navbarOpen = _useState[0],
      setNavbarOpen = _useState[1];

  return __jsx("nav", {
    className: (props.transparent ? "top-0 absolute z-50 w-full" : "relative bg-white shadow-lg") + " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: (props.transparent ? "text-white" : "text-gray-800") + " title-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase",
    href: "https://nahdliyindev.github.io/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "NahdliyinDev"), __jsx("button", {
    className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
    type: "button",
    onClick: function onClick() {
      return setNavbarOpen(!navbarOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: (props.transparent ? "text-white" : "text-gray-800") + " fas fa-bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" + (navbarOpen ? " block rounded shadow-lg" : " hidden"),
    id: "example-navbar-warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "flex flex-col lg:flex-row list-none lg:ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-facebook text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, "Share"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-twitter text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, "Tweet"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-github text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, "Star"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: (props.transparent ? "bg-white text-gray-800 active:bg-gray-100" : "bg-pink-500 text-white active:bg-pink-600") + " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3",
    type: "button",
    style: {
      transition: "all .15s ease"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-arrow-alt-circle-down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }), " Download"))))));
}

_s(Navbar, "15c5sM/hZYq2eTRu58QbId6xljA=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlU3RhdGUiLCJuYXZiYXJPcGVuIiwic2V0TmF2YmFyT3BlbiIsInRyYW5zcGFyZW50IiwidHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFNQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUE0QztBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFDLEtBQUQsQ0FESjtBQUFBLE1BQ2pDQyxVQURpQztBQUFBLE1BQ3JCQyxhQURxQjs7QUFFeEMsU0FDSTtBQUNBLGFBQVMsRUFDUCxDQUFDSCxLQUFLLENBQUNJLFdBQU4sR0FDRyw0QkFESCxHQUVHLDZCQUZKLElBR0EseUVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFBO0FBQUssYUFBUyxFQUFDLG9FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQ1AsQ0FBQ0osS0FBSyxDQUFDSSxXQUFOLEdBQW9CLFlBQXBCLEdBQW1DLGVBQXBDLElBQ0EseUZBSEo7QUFLRSxRQUFJLEVBQUMsaUNBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQVNFO0FBQ0UsYUFBUyxFQUFDLDZKQURaO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxhQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFuQjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQ0UsYUFBUyxFQUNQLENBQUNGLEtBQUssQ0FBQ0ksV0FBTixHQUFvQixZQUFwQixHQUFtQyxlQUFwQyxJQUNBLGNB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MDU1YTI0YjU2NWYyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB0cmFuc3BhcmVudD86Ym9vbGVhblxyXG59XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIocHJvcHM6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgPyBcInRvcC0wIGFic29sdXRlIHotNTAgdy1mdWxsXCJcclxuICAgICAgICAgICAgOiBcInJlbGF0aXZlIGJnLXdoaXRlIHNoYWRvdy1sZ1wiKSArXHJcbiAgICAgICAgICBcIiBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTIgcHktMyBuYXZiYXItZXhwYW5kLWxnXCJcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IG14LWF1dG8gZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWJldHdlZW4gbGc6dy1hdXRvIGxnOnN0YXRpYyBsZzpibG9jayBsZzpqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudCA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWdyYXktODAwXCIpICtcclxuICAgICAgICAgICAgICAgIFwiIHRpdGxlLWxnIGZvbnQtYm9sZCBsZWFkaW5nLXJlbGF4ZWQgaW5saW5lLWJsb2NrIG1yLTQgcHktMiB3aGl0ZXNwYWNlLW5vLXdyYXAgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmFoZGxpeWluZGV2LmdpdGh1Yi5pby9cIj5cclxuICAgICAgICAgICAgICBOYWhkbGl5aW5EZXZcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBsZWFkaW5nLW5vbmUgcHgtMyBweS0xIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQgYmctdHJhbnNwYXJlbnQgYmxvY2sgbGc6aGlkZGVuIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhck9wZW4oIW5hdmJhck9wZW4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudCA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWdyYXktODAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgXCIgZmFzIGZhLWJhcnNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgXCJsZzpmbGV4IGZsZXgtZ3JvdyBpdGVtcy1jZW50ZXIgYmctd2hpdGUgbGc6YmctdHJhbnNwYXJlbnQgbGc6c2hhZG93LW5vbmVcIiArXHJcbiAgICAgICAgICAgICAgKG5hdmJhck9wZW4gPyBcIiBibG9jayByb3VuZGVkIHNoYWRvdy1sZ1wiIDogXCIgaGlkZGVuXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWQ9XCJleGFtcGxlLW5hdmJhci13YXJuaW5nXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxpc3Qtbm9uZSBsZzptbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtd2hpdGUgbGc6aG92ZXI6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHB4LTMgcHktNCBsZzpweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS01MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCIgZmFiIGZhLWZhY2Vib29rIHRleHQtbGcgbGVhZGluZy1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+U2hhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtd2hpdGUgbGc6aG92ZXI6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHB4LTMgcHktNCBsZzpweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS01MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCIgZmFiIGZhLXR3aXR0ZXIgdGV4dC1sZyBsZWFkaW5nLWxnIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gaW5saW5lLWJsb2NrIG1sLTJcIj5Ud2VldDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC13aGl0ZSBsZzpob3Zlcjp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgcHgtMyBweS00IGxnOnB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsZzp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTUwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIiBmYWIgZmEtZ2l0aHViIHRleHQtbGcgbGVhZGluZy1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+U3Rhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy13aGl0ZSB0ZXh0LWdyYXktODAwIGFjdGl2ZTpiZy1ncmF5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctcGluay01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctcGluay02MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSBweC00IHB5LTIgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LW1kIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbGc6bXItMSBsZzptYi0wIG1sLTMgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIC4xNXMgZWFzZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1hbHQtY2lyY2xlLWRvd25cIj48L2k+IERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==