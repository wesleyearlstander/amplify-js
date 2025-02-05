(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[31],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-toast.entry.js":
/*!********************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-toast.entry.js ***!
  \********************************************************************/
/*! exports provided: amplify_toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_toast", function() { return AmplifyToast; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");

var amplifyToastCss = ":host{--background-color:var(--amplify-secondary-tint);--color:var(--amplify-white);--font-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--close-icon-color:var(--amplify-white);--close-icon-hover:var(--amplify-red)}.toast-icon{padding-right:5px}.toast{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:absolute;top:0;left:0;width:100%;z-index:99;-webkit-box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);padding:16px;background-color:var(--background-color);font-size:var(--font-size);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:5px;font-family:var(--font-family)}.toast>span{margin-right:10px}.toast-close{margin-left:auto;-ms-flex-item-align:center;align-self:center;position:relative;width:18px;height:18px;overflow:hidden;cursor:pointer;background:transparent;border:none}.toast-close::before,.toast-close::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:var(--close-icon-color)}.toast-close:hover::before,.toast-close:hover::after{background:var(--close-icon-hover)}.toast-close::before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.toast-close::after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}";

var AmplifyToast =
/** @class */
function () {
  function AmplifyToast(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Message to be displayed inside the toast*/

    this.message = '';
  }
  /*
  TODO #170365145: Work on a helper function that will populate and
  update class colors for success / warning / failure messages
  */


  AmplifyToast.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "toast"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", {
      "class": "toast-icon",
      name: "warning"
    }), this.message ? Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.message) : null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      "class": "toast-close",
      onClick: this.handleClose
    }));
  };

  return AmplifyToast;
}();

AmplifyToast.style = amplifyToastCss;


/***/ })

}]);
//# sourceMappingURL=31.js.map