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
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-facebook text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "Share"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-twitter text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, "Tweet"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-github text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, "Star"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-github text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }, "Star")))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlU3RhdGUiLCJuYXZiYXJPcGVuIiwic2V0TmF2YmFyT3BlbiIsInRyYW5zcGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQTRDO0FBQUE7O0FBQUEsa0JBQ0pDLHNEQUFRLENBQUMsS0FBRCxDQURKO0FBQUEsTUFDakNDLFVBRGlDO0FBQUEsTUFDckJDLGFBRHFCOztBQUV4QyxTQUNJO0FBQ0EsYUFBUyxFQUNQLENBQUNILEtBQUssQ0FBQ0ksV0FBTixHQUNHLDRCQURILEdBRUcsNkJBRkosSUFHQSx5RUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUE7QUFBSyxhQUFTLEVBQUMsb0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9GQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFDUCxDQUFDSixLQUFLLENBQUNJLFdBQU4sR0FBb0IsWUFBcEIsR0FBbUMsZUFBcEMsSUFDQSx5RkFISjtBQUtFLFFBQUksRUFBQyxpQ0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBU0U7QUFDRSxhQUFTLEVBQUMsNkpBRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1ELGFBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQW5CO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxhQUFTLEVBQ1AsQ0FBQ0YsS0FBSyxDQUFDSSxXQUFOLEdBQW9CLFlBQXBCLEdBQW1DLGVBQXBDLElBQ0EsY0FISjtBQUFBO0FBQUE7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QUFBLE07QUEySU1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhOTYyMTYwZjJiMTg5YzRhODg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRyYW5zcGFyZW50Pzpib29sZWFuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5hdmJhcihwcm9wczogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgW25hdmJhck9wZW4sIHNldE5hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICA/IFwidG9wLTAgYWJzb2x1dGUgei01MCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICA6IFwicmVsYXRpdmUgYmctd2hpdGUgc2hhZG93LWxnXCIpICtcclxuICAgICAgICAgIFwiIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMiBweS0zIG5hdmJhci1leHBhbmQtbGdcIlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiBsZzp3LWF1dG8gbGc6c3RhdGljIGxnOmJsb2NrIGxnOmp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50ID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtZ3JheS04MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgXCIgdGl0bGUtbGcgZm9udC1ib2xkIGxlYWRpbmctcmVsYXhlZCBpbmxpbmUtYmxvY2sgbXItNCBweS0yIHdoaXRlc3BhY2Utbm8td3JhcCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uYWhkbGl5aW5kZXYuZ2l0aHViLmlvL1wiPlxyXG4gICAgICAgICAgICAgIE5haGRsaXlpbkRldlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGxlYWRpbmctbm9uZSBweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZCBiZy10cmFuc3BhcmVudCBibG9jayBsZzpoaWRkZW4gb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2YmFyT3BlbighbmF2YmFyT3Blbil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50ID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtZ3JheS04MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICBcIiBmYXMgZmEtYmFyc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBcImxnOmZsZXggZmxleC1ncm93IGl0ZW1zLWNlbnRlciBiZy13aGl0ZSBsZzpiZy10cmFuc3BhcmVudCBsZzpzaGFkb3ctbm9uZVwiICtcclxuICAgICAgICAgICAgICAobmF2YmFyT3BlbiA/IFwiIGJsb2NrIHJvdW5kZWQgc2hhZG93LWxnXCIgOiBcIiBoaWRkZW5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZD1cImV4YW1wbGUtbmF2YmFyLXdhcm5pbmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBsaXN0LW5vbmUgbGc6bWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJsZzp0ZXh0LXdoaXRlIGxnOmhvdmVyOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBweC0zIHB5LTQgbGc6cHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNTAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiIGZhYiBmYS1mYWNlYm9vayB0ZXh0LWxnIGxlYWRpbmctbGcgXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBpbmxpbmUtYmxvY2sgbWwtMlwiPlNoYXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJsZzp0ZXh0LXdoaXRlIGxnOmhvdmVyOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBweC0zIHB5LTQgbGc6cHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNTAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiIGZhYiBmYS10d2l0dGVyIHRleHQtbGcgbGVhZGluZy1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+VHdlZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtd2hpdGUgbGc6aG92ZXI6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHB4LTMgcHktNCBsZzpweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS01MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCIgZmFiIGZhLWdpdGh1YiB0ZXh0LWxnIGxlYWRpbmctbGcgXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBpbmxpbmUtYmxvY2sgbWwtMlwiPlN0YXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC13aGl0ZSBsZzpob3Zlcjp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgcHgtMyBweS00IGxnOnB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsZzp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTUwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIiBmYWIgZmEtZ2l0aHViIHRleHQtbGcgbGVhZGluZy1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+U3Rhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9