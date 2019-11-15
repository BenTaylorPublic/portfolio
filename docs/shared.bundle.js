require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"./shared/classes/other-class":[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyOtherCoolClass {
    static hello(striign) {
        console.log("AYLMAO " + striign);
    }
}
exports.MyOtherCoolClass = MyOtherCoolClass;

},{}],"./shared/classes/some-class":[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_enums_1 = require("../enums/my-enums");
class MyCoolClass {
    static hello(striign) {
        const dkgmsl = {
            id: 532,
            thing: "gndglkds",
            thinggy: my_enums_1.Mynfjkds.Abc
        };
        console.log(dkgmsl);
        console.log("AY " + striign);
    }
}
exports.MyCoolClass = MyCoolClass;

},{"../enums/my-enums":1}],1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mynfjkds;
(function (Mynfjkds) {
    Mynfjkds[Mynfjkds["Abc"] = 0] = "Abc";
    Mynfjkds[Mynfjkds["Lol"] = 1] = "Lol";
})(Mynfjkds = exports.Mynfjkds || (exports.Mynfjkds = {}));

},{}]},{},[]);
