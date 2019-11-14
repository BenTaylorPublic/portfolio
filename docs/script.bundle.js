(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const some_class_1 = require("./shared/classes/some-class");
const other_class_1 = require("./shared/classes/other-class");
function derp() {
    console.log("NewLog");
    some_class_1.MyCoolClass.hello("Script");
    other_class_1.MyOtherCoolClass.hello("SUP");
}
derp();

},{"./shared/classes/other-class":undefined,"./shared/classes/some-class":undefined}]},{},[1]);
