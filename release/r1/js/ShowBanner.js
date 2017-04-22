'use strict';
// TODO: apply singleton if nessesary
console.log(`ShowBanner.js start`);

function ShowBanner() {}

ShowBanner.prototype.do = function(first_argument) {
    // body...
    console.log(`Show banner: ` + first_argument);
};

console.log(`ShowBanner.js end`);
