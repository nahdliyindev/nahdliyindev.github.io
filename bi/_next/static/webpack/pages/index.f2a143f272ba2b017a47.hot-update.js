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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlU3RhdGUiLCJuYXZiYXJPcGVuIiwic2V0TmF2YmFyT3BlbiIsInRyYW5zcGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQTRDO0FBQUE7O0FBQUEsa0JBQ0pDLHNEQUFRLENBQUMsS0FBRCxDQURKO0FBQUEsTUFDakNDLFVBRGlDO0FBQUEsTUFDckJDLGFBRHFCOztBQUV4QyxTQUNJO0FBQ0EsYUFBUyxFQUNQLENBQUNILEtBQUssQ0FBQ0ksV0FBTixHQUNHLDRCQURILEdBRUcsNkJBRkosSUFHQSx5RUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUE7QUFBSyxhQUFTLEVBQUMsb0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9GQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFDUCxDQUFDSixLQUFLLENBQUNJLFdBQU4sR0FBb0IsWUFBcEIsR0FBbUMsZUFBcEMsSUFDQSx5RkFISjtBQUtFLFFBQUksRUFBQyxpQ0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBU0U7QUFDRSxhQUFTLEVBQUMsNkpBRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1ELGFBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQW5CO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxhQUFTLEVBQ1AsQ0FBQ0YsS0FBSyxDQUFDSSxXQUFOLEdBQW9CLFlBQXBCLEdBQW1DLGVBQXBDLElBQ0EsY0FISjtBQUFBO0FBQUE7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S0FBQUEsTTtBQTJJTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjJhMTQzZjI3MmJhMmIwMTdhNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdHJhbnNwYXJlbnQ/OmJvb2xlYW5cclxufVxyXG5cclxuZnVuY3Rpb24gTmF2YmFyKHByb3BzOiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgICBjb25zdCBbbmF2YmFyT3Blbiwgc2V0TmF2YmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgKHByb3BzLnRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgID8gXCJ0b3AtMCBhYnNvbHV0ZSB6LTUwIHctZnVsbFwiXHJcbiAgICAgICAgICAgIDogXCJyZWxhdGl2ZSBiZy13aGl0ZSBzaGFkb3ctbGdcIikgK1xyXG4gICAgICAgICAgXCIgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0yIHB5LTMgbmF2YmFyLWV4cGFuZC1sZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBteC1hdXRvIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlIGZsZXgganVzdGlmeS1iZXR3ZWVuIGxnOnctYXV0byBsZzpzdGF0aWMgbGc6YmxvY2sgbGc6anVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnQgPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1ncmF5LTgwMFwiKSArXHJcbiAgICAgICAgICAgICAgICBcIiB0aXRsZS1sZyBmb250LWJvbGQgbGVhZGluZy1yZWxheGVkIGlubGluZS1ibG9jayBtci00IHB5LTIgd2hpdGVzcGFjZS1uby13cmFwIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25haGRsaXlpbmRldi5naXRodWIuaW8vXCI+XHJcbiAgICAgICAgICAgICAgTmFoZGxpeWluRGV2XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQteGwgbGVhZGluZy1ub25lIHB4LTMgcHktMSBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkIGJnLXRyYW5zcGFyZW50IGJsb2NrIGxnOmhpZGRlbiBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZiYXJPcGVuKCFuYXZiYXJPcGVuKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnQgPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1ncmF5LTgwMFwiKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiIGZhcyBmYS1iYXJzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIFwibGc6ZmxleCBmbGV4LWdyb3cgaXRlbXMtY2VudGVyIGJnLXdoaXRlIGxnOmJnLXRyYW5zcGFyZW50IGxnOnNoYWRvdy1ub25lXCIgK1xyXG4gICAgICAgICAgICAgIChuYXZiYXJPcGVuID8gXCIgYmxvY2sgcm91bmRlZCBzaGFkb3ctbGdcIiA6IFwiIGhpZGRlblwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlkPVwiZXhhbXBsZS1uYXZiYXItd2FybmluZ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxpc3Qtbm9uZSBsZzptbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtd2hpdGUgbGc6aG92ZXI6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHB4LTMgcHktNCBsZzpweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS01MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCIgZmFiIGZhLWZhY2Vib29rIHRleHQtbGcgbGVhZGluZy1sZyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+U2hhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtd2hpdGUgbGc6aG92ZXI6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHB4LTMgcHktNCBsZzpweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS01MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCIgZmFiIGZhLXR3aXR0ZXIgdGV4dC1sZyBsZWFkaW5nLWxnIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gaW5saW5lLWJsb2NrIG1sLTJcIj5Ud2VldDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJsZzp0ZXh0LXdoaXRlIGxnOmhvdmVyOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBweC0zIHB5LTQgbGc6cHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL25haGRsaXlpbmRldi9cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNTAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiIGZhYiBmYS1pbnN0YWdyYW0gdGV4dC1sZyBsZWFkaW5nLWxnIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gaW5saW5lLWJsb2NrIG1sLTJcIj5TdGFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy50cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtd2hpdGUgbGc6aG92ZXI6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHB4LTMgcHktNCBsZzpweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uYWhkbGl5aW5kZXZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAocHJvcHMudHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNTAwXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiIGZhYiBmYS1naXRodWIgdGV4dC1sZyBsZWFkaW5nLWxnIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gaW5saW5lLWJsb2NrIG1sLTJcIj5TdGFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==