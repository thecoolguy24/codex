"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_images_botStatus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/images/botStatus.svg */ \"./src/utils/images/botStatus.svg\");\n/* harmony import */ var _utils_images_botOfflineStatus_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/images/botOfflineStatus.svg */ \"./src/utils/images/botOfflineStatus.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import the offline status image\nconst Footer = ()=>{\n    _s();\n    const [isBotOnline, setIsBotOnline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkBotStatus = async ()=>{\n            try {\n                const response = await fetch(\"http://192.9.183.164:25878/\");\n                if (response.status === 200) {\n                    setIsBotOnline(true);\n                } else {\n                    setIsBotOnline(false); // Set to false if the status code is not 200\n                }\n            } catch (error) {\n                console.error(\"Error checking bot status:\", error);\n                setIsBotOnline(false); // Set to false in case of error\n            }\n        };\n        checkBotStatus();\n    }, []);\n    const year = new Date().getFullYear();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n            className: \"footer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"footer-sec1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"footer-header\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"h-color\",\n                                            href: \"/\",\n                                            style: {\n                                                fontSize: \"32px\"\n                                            },\n                                            children: \"musi.lol\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            style: {\n                                                fontSize: \"16px\",\n                                                display: \"flex\",\n                                                flexDirection: \"row\",\n                                                alignItems: \"center\"\n                                            },\n                                            className: \"p-color\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    src: isBotOnline ? _utils_images_botStatus_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : _utils_images_botOfflineStatus_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                                    width: 20,\n                                                    height: 20,\n                                                    alt: \"online-status\",\n                                                    className: \"onlineStatus\"\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                \" \",\n                                                isBotOnline ? \"Musi is online\" : \"Musi is offline\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"footer-items\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {}, void 0, false, {\n                                        fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {}, void 0, false, {\n                                        fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"footer-sec2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-color\",\n                                    style: {\n                                        fontSize: \"20px\"\n                                    },\n                                    children: \"Created with ❤️ by lrdwlfy\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-color\",\n                                    style: {\n                                        fontSize: \"20px\"\n                                    },\n                                    children: [\n                                        year,\n                                        \" \\xa9 All rights reserved!\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"footer-sec2-link\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/musi-website/src/components/Footer.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Footer, \"uko1J53xTLvCuw4Jr4oBCedeaxk=\");\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNmO0FBQ0U7QUFDNkI7QUFDUSxDQUFDLGtDQUFrQztBQUV2RyxNQUFNTSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxpQkFBaUI7WUFDckIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLElBQUlELFNBQVNFLE1BQU0sS0FBSyxLQUFLO29CQUMzQkosZUFBZTtnQkFDakIsT0FBTztvQkFDTEEsZUFBZSxRQUFRLDZDQUE2QztnQkFDdEU7WUFDRixFQUFFLE9BQU9LLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO2dCQUM1Q0wsZUFBZSxRQUFRLGdDQUFnQztZQUN6RDtRQUNGO1FBRUFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sT0FBTyxJQUFJQyxPQUFPQyxXQUFXO0lBRW5DLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBT0MsV0FBVTs7OEJBQ2hCLDhEQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNGOzRCQUFJRSxXQUFVO3NDQUNiLDRFQUFDQzswQ0FDQyw0RUFBQ0M7O3NEQUNDLDhEQUFDcEIsa0RBQUlBOzRDQUFDa0IsV0FBVTs0Q0FBVUcsTUFBSzs0Q0FBSUMsT0FBTztnREFBRUMsVUFBVTs0Q0FBTztzREFBRzs7Ozs7O3NEQUloRSw4REFBQ0M7NENBQ0NGLE9BQU87Z0RBQ0xDLFVBQVU7Z0RBQ1ZFLFNBQVM7Z0RBQ1RDLGVBQWU7Z0RBQ2ZDLFlBQVk7NENBQ2Q7NENBQ0FULFdBQVU7OzhEQUVWLDhEQUFDakIsbURBQUtBO29EQUNKMkIsS0FBS3ZCLGNBQWNILG1FQUFlQSxHQUFHQywwRUFBZ0JBO29EQUNyRDBCLE9BQU87b0RBQ1BDLFFBQVE7b0RBQ1JDLEtBQUk7b0RBQ0piLFdBQVU7Ozs7OztnREFDVDtnREFDRmIsY0FBYyxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUsxQyw4REFBQ1c7NEJBQUlFLFdBQVU7c0NBQ2IsNEVBQUNDOztrREFDQyw4REFBQ0M7Ozs7O2tEQUNELDhEQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJUCw4REFBQ0o7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDRjs7OENBQ0MsOERBQUNnQjtvQ0FBRWQsV0FBVTtvQ0FBVUksT0FBTzt3Q0FBRUMsVUFBVTtvQ0FBTzs4Q0FBRzs7Ozs7OzhDQUdwRCw4REFBQ1M7b0NBQUVkLFdBQVU7b0NBQVVJLE9BQU87d0NBQUVDLFVBQVU7b0NBQU87O3dDQUM5Q1Y7d0NBQUs7Ozs7Ozs7Ozs7Ozs7c0NBR1YsOERBQUNHOzRCQUFJRSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQTVFTWQ7S0FBQUE7QUE4RU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzPzlkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYm90T25saW5lU3RhdHVzIGZyb20gXCIuLi91dGlscy9pbWFnZXMvYm90U3RhdHVzLnN2Z1wiO1xuaW1wb3J0IGJvdE9mZmxpbmVTdGF0dXMgZnJvbSBcIi4uL3V0aWxzL2ltYWdlcy9ib3RPZmZsaW5lU3RhdHVzLnN2Z1wiOyAvLyBJbXBvcnQgdGhlIG9mZmxpbmUgc3RhdHVzIGltYWdlXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzQm90T25saW5lLCBzZXRJc0JvdE9ubGluZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja0JvdFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTkyLjkuMTgzLjE2NDoyNTg3OC9cIik7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHNldElzQm90T25saW5lKHRydWUpOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRJc0JvdE9ubGluZShmYWxzZSk7IC8vIFNldCB0byBmYWxzZSBpZiB0aGUgc3RhdHVzIGNvZGUgaXMgbm90IDIwMFxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2hlY2tpbmcgYm90IHN0YXR1czpcIiwgZXJyb3IpO1xuICAgICAgICBzZXRJc0JvdE9ubGluZShmYWxzZSk7IC8vIFNldCB0byBmYWxzZSBpbiBjYXNlIG9mIGVycm9yXG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgY2hlY2tCb3RTdGF0dXMoKTtcbiAgfSwgW10pO1xuICBcbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zZWMxXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItaGVhZGVyXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJoLWNvbG9yXCIgaHJlZj1cIi9cIiBzdHlsZT17eyBmb250U2l6ZTogXCIzMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICBtdXNpLmxvbFxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtY29sb3JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2lzQm90T25saW5lID8gYm90T25saW5lU3RhdHVzIDogYm90T2ZmbGluZVN0YXR1c30gLy8gVXNlIHRlcm5hcnkgb3BlcmF0b3IgdG8gc3dpdGNoIGJldHdlZW4gaW1hZ2VzXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwib25saW5lLXN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9ubGluZVN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIHtpc0JvdE9ubGluZSA/IFwiTXVzaSBpcyBvbmxpbmVcIiA6IFwiTXVzaSBpcyBvZmZsaW5lXCJ9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtc1wiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc2VjMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLWNvbG9yXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICBDcmVhdGVkIHdpdGgg4p2k77iPIGJ5IGxyZHdsZnlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtY29sb3JcIiBzdHlsZT17eyBmb250U2l6ZTogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgIHt5ZWFyfSAmY29weTsgQWxsIHJpZ2h0cyByZXNlcnZlZCFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zZWMyLWxpbmtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJJbWFnZSIsImJvdE9ubGluZVN0YXR1cyIsImJvdE9mZmxpbmVTdGF0dXMiLCJGb290ZXIiLCJpc0JvdE9ubGluZSIsInNldElzQm90T25saW5lIiwiY2hlY2tCb3RTdGF0dXMiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImRpdiIsImZvb3RlciIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJocmVmIiwic3R5bGUiLCJmb250U2l6ZSIsInNwYW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Footer.js\n"));

/***/ })

});