'use strict';

console.log(`script.js start`);

// this function for testing delay time, remove if needed
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function PageInit() {}

PageInit.prototype.getReady = function() {

    var promise = new Promise(function(resolve, reject) {

        // Todo: change the code below by your own request
        sleep(1000);
        var randomNumber = Math.floor((Math.random() * 10) + 1);

        if (randomNumber % 2 == 0) {

            resolve(`ready`);
        } else {
            reject(`notReady`);
        }
    });

    return promise;

};

console.log(`script.js end`);
