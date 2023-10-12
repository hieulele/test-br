"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/spotify":
/*!**********************************************!*\
  !*** external "next-auth/providers/spotify" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/spotify");

/***/ }),

/***/ "spotify-web-api-node":
/*!***************************************!*\
  !*** external "spotify-web-api-node" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("spotify-web-api-node");

/***/ }),

/***/ "(api)/./src/config/spotify.ts":
/*!*******************************!*\
  !*** ./src/config/spotify.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scopes\": () => (/* binding */ scopes),\n/* harmony export */   \"spotifyApi\": () => (/* binding */ spotifyApi)\n/* harmony export */ });\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spotify-web-api-node */ \"spotify-web-api-node\");\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__);\n\nconst scopes = [\n    \"user-read-email\",\n    \"user-read-private\",\n    \"user-library-read\",\n    \"user-top-read\",\n    \"user-read-playback-state\",\n    \"user-modify-playback-state\",\n    \"user-read-currently-playing\",\n    \"user-read-recently-played\",\n    \"user-follow-read\",\n    \"playlist-read-private\",\n    \"playlist-read-collaborative\",\n    \"streaming\"\n].join(\",\");\nconst spotifyApi = new (spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default())({\n    clientId: process.env.SPOTIFY_CLIENT_ID,\n    clientSecret: process.env.SPOTIFY_CLIENT_SECRET\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uZmlnL3Nwb3RpZnkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUVqRCxNQUFNQyxTQUFTO0lBQ1g7SUFDSDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0EsQ0FBQ0MsSUFBSSxDQUFDO0FBRVAsTUFBTUMsYUFBYSxJQUFJSCw2REFBYUEsQ0FBQztJQUNwQ0ksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7SUFDdkNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0cscUJBQXFCO0FBQ2hEO0FBRTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeS1jbG9uZS8uL3NyYy9jb25maWcvc3BvdGlmeS50cz9kZjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcG90aWZ5V2ViQXBpIGZyb20gXCJzcG90aWZ5LXdlYi1hcGktbm9kZVwiO1xuXG5jb25zdCBzY29wZXMgPSBbXG4gICAgJ3VzZXItcmVhZC1lbWFpbCcsXG5cdCd1c2VyLXJlYWQtcHJpdmF0ZScsXG5cdCd1c2VyLWxpYnJhcnktcmVhZCcsXG5cdCd1c2VyLXRvcC1yZWFkJyxcblx0J3VzZXItcmVhZC1wbGF5YmFjay1zdGF0ZScsXG5cdCd1c2VyLW1vZGlmeS1wbGF5YmFjay1zdGF0ZScsXG5cdCd1c2VyLXJlYWQtY3VycmVudGx5LXBsYXlpbmcnLFxuXHQndXNlci1yZWFkLXJlY2VudGx5LXBsYXllZCcsXG5cdCd1c2VyLWZvbGxvdy1yZWFkJyxcblx0J3BsYXlsaXN0LXJlYWQtcHJpdmF0ZScsXG5cdCdwbGF5bGlzdC1yZWFkLWNvbGxhYm9yYXRpdmUnLFxuXHQnc3RyZWFtaW5nJ1xuXS5qb2luKCcsJyk7XG5cbmNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeVdlYkFwaSh7XG5cdGNsaWVudElkOiBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9JRCxcblx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVRcbn0pXG5cbmV4cG9ydCB7IHNwb3RpZnlBcGksIHNjb3BlcyB9Il0sIm5hbWVzIjpbIlNwb3RpZnlXZWJBcGkiLCJzY29wZXMiLCJqb2luIiwic3BvdGlmeUFwaSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIlNQT1RJRllfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/config/spotify.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/spotify */ \"(api)/./src/config/spotify.ts\");\n\n\n\nconst jwtCallback = async ({ token , account , user  })=>{\n    console.log(\"token\", token);\n    return token;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.SPOTIFY_CLIENT_ID,\n            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,\n            // Hỏi Spotify quyền được làm việc vs tài khoản của người dùng\n            authorization: {\n                url: \"https://accounts.spotify.com/authorize\",\n                params: {\n                    scope: _config_spotify__WEBPACK_IMPORTED_MODULE_2__.scopes // Các actions mà mk có thể lm vs tk của người dùng\n                }\n            }\n        })\n    ],\n    //\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        jwt: jwtCallback\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0Q7QUFDRztBQUNHO0FBSTVELE1BQU1HLGNBQXdDLE9BQU8sRUFDcERDLE1BQUssRUFDTEMsUUFBTyxFQUNQQyxLQUFJLEVBQ0osR0FBSztJQUNMQyxRQUFRQyxHQUFHLENBQUMsU0FBU0o7SUFDckIsT0FBT0E7QUFDUjtBQUNBLGlFQUFlSixnREFBUUEsQ0FBQztJQUN2QlMsV0FBVztRQUNWUixrRUFBZUEsQ0FBQztZQUNmUyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtZQUN2Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxxQkFBcUI7WUFDL0MsOERBQThEO1lBQzlEQyxlQUFlO2dCQUNkQyxLQUFLO2dCQUNMQyxRQUFRO29CQUNQQyxPQUFPakIsbURBQU1BLENBQUUsbURBQW1EO2dCQUNuRTtZQUNEO1FBQ0Q7S0FDQTtJQUVELEVBQUU7SUFDRmtCLE9BQU87UUFDTkMsUUFBUTtJQUNUO0lBQ0FDLFdBQVc7UUFDVkMsS0FBS3BCO0lBQ047QUFDRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeS1jbG9uZS8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IENhbGxiYWNrc09wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgU3BvdGlmeVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvc3BvdGlmeSdcbmltcG9ydCB7IHNjb3Blcywgc3BvdGlmeUFwaSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9zcG90aWZ5J1xuaW1wb3J0IHsgRXh0ZW5kZWRUb2tlbiwgVG9rZW5FcnJvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJ1xuXG5cbmNvbnN0IGp3dENhbGxiYWNrIDogQ2FsbGJhY2tzT3B0aW9uc1snand0J10gPSBhc3luYyAoe1xuXHR0b2tlbixcblx0YWNjb3VudCxcblx0dXNlclxufSkgPT4geyBcblx0Y29uc29sZS5sb2coJ3Rva2VuJywgdG9rZW4pO1xuXHRyZXR1cm4gdG9rZW47XG59XG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG5cdHByb3ZpZGVyczogW1xuXHRcdFNwb3RpZnlQcm92aWRlcih7XG5cdFx0XHRjbGllbnRJZDogcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfSUQgYXMgc3RyaW5nLFxuXHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nLFxuXHRcdFx0Ly8gSOG7j2kgU3BvdGlmeSBxdXnhu4FuIMSRxrDhu6NjIGzDoG0gdmnhu4djIHZzIHTDoGkga2hv4bqjbiBj4bunYSBuZ8aw4budaSBkw7luZ1xuXHRcdFx0YXV0aG9yaXphdGlvbjoge1xuXHRcdFx0XHR1cmw6ICdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZScsXG5cdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdHNjb3BlOiBzY29wZXMgIC8vIEPDoWMgYWN0aW9ucyBtw6AgbWsgY8OzIHRo4buDIGxtIHZzIHRrIGPhu6dhIG5nxrDhu51pIGTDuW5nXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRdLFxuXG5cdC8vXG5cdHBhZ2VzOiB7XG5cdFx0c2lnbkluOiAnL2xvZ2luJ1xuXHR9LFxuXHRjYWxsYmFja3M6IHtcblx0XHRqd3Q6IGp3dENhbGxiYWNrLFxuXHR9XG59KVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiU3BvdGlmeVByb3ZpZGVyIiwic2NvcGVzIiwiand0Q2FsbGJhY2siLCJ0b2tlbiIsImFjY291bnQiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIlNQT1RJRllfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInVybCIsInBhcmFtcyIsInNjb3BlIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();