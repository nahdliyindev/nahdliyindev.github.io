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
    href: "https://www.facebook.com/Nahdliyin-Dev-103133681671572",
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
    href: "https://twitter.com/nahdliyindev",
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
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://www.instagram.com/nahdliyindev/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-instagram text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, "Star"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://github.com/nahdliyindev",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-github text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlU3RhdGUiLCJuYXZiYXJPcGVuIiwic2V0TmF2YmFyT3BlbiIsInRyYW5zcGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQTRDO0FBQUE7O0FBQUEsa0JBQ0pDLHNEQUFRLENBQUMsS0FBRCxDQURKO0FBQUEsTUFDakNDLFVBRGlDO0FBQUEsTUFDckJDLGFBRHFCOztBQUV4QyxTQUNJO0FBQ0EsYUFBUyxFQUNQLENBQUNILEtBQUssQ0FBQ0ksV0FBTixHQUNHLDRCQURILEdBRUcsNkJBRkosSUFHQSx5RUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUE7QUFBSyxhQUFTLEVBQUMsb0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9GQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFDUCxDQUFDSixLQUFLLENBQUNJLFdBQU4sR0FBb0IsWUFBcEIsR0FBbUMsZUFBcEMsSUFDQSx5RkFISjtBQUtFLFFBQUksRUFBQyxpQ0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBU0U7QUFDRSxhQUFTLEVBQUMsNkpBRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1ELGFBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQW5CO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxhQUFTLEVBQ1AsQ0FBQ0YsS0FBSyxDQUFDSSxXQUFOLEdBQW9CLFlBQXBCLEdBQW1DLGVBQXBDLElBQ0EsY0FISjtBQUFBO0FBQUE7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OztLQUFBQSxNO0FBMklNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNDcwN2IxZTdjMzRkZjU3N2I1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB0cmFuc3BhcmVudD86Ym9vbGVhblxyXG59XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIocHJvcHM6IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgPyBcInRvcC0wIGFic29sdXRlIHotNTAgdy1mdWxsXCJcclxuICAgICAgICAgICAgOiBcInJlbGF0aXZlIGJnLXdoaXRlIHNoYWRvdy1sZ1wiKSArXHJcbiAgICAgICAgICBcIiBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTIgcHktMyBuYXZiYXItZXhwYW5kLWxnXCJcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IG14LWF1dG8gZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWJldHdlZW4gbGc6dy1hdXRvIGxnOnN0YXRpYyBsZzpibG9jayBsZzpqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudCA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWdyYXktODAwXCIpICtcclxuICAgICAgICAgICAgICAgIFwiIHRpdGxlLWxnIGZvbnQtYm9sZCBsZWFkaW5nLXJlbGF4ZWQgaW5saW5lLWJsb2NrIG1yLTQgcHktMiB3aGl0ZXNwYWNlLW5vLXdyYXAgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmFoZGxpeWluZGV2LmdpdGh1Yi5pby9cIj5cclxuICAgICAgICAgICAgICBOYWhkbGl5aW5EZXZcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBsZWFkaW5nLW5vbmUgcHgtMyBweS0xIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQgYmctdHJhbnNwYXJlbnQgYmxvY2sgbGc6aGlkZGVuIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhck9wZW4oIW5hdmJhck9wZW4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudCA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWdyYXktODAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgXCIgZmFzIGZhLWJhcnNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgXCJsZzpmbGV4IGZsZXgtZ3JvdyBpdGVtcy1jZW50ZXIgYmctd2hpdGUgbGc6YmctdHJhbnNwYXJlbnQgbGc6c2hhZG93LW5vbmVcIiArXHJcbiAgICAgICAgICAgICAgKG5hdmJhck9wZW4gPyBcIiBibG9jayByb3VuZGVkIHNoYWRvdy1sZ1wiIDogXCIgaGlkZGVuXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWQ9XCJleGFtcGxlLW5hdmJhci13YXJuaW5nXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGlzdC1ub25lIGxnOm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC13aGl0ZSBsZzpob3Zlcjp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgcHgtMyBweS00IGxnOnB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL05haGRsaXlpbi1EZXYtMTAzMTMzNjgxNjcxNTcyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsZzp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTUwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIiBmYWIgZmEtZmFjZWJvb2sgdGV4dC1sZyBsZWFkaW5nLWxnIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gaW5saW5lLWJsb2NrIG1sLTJcIj5TaGFyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC13aGl0ZSBsZzpob3Zlcjp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgcHgtMyBweS00IGxnOnB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9uYWhkbGl5aW5kZXZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNTAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiIGZhYiBmYS10d2l0dGVyIHRleHQtbGcgbGVhZGluZy1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+VHdlZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC13aGl0ZSBsZzpob3Zlcjp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgcHgtMyBweS00IGxnOnB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9uYWhkbGl5aW5kZXYvXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsZzp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTUwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIiBmYWIgZmEtaW5zdGFncmFtIHRleHQtbGcgbGVhZGluZy1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+U3Rhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJsZzp0ZXh0LXdoaXRlIGxnOmhvdmVyOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBweC0zIHB5LTQgbGc6cHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmFoZGxpeWluZGV2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsZzp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTUwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIiBmYWIgZmEtZ2l0aHViIHRleHQtbGcgbGVhZGluZy1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+U3Rhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=