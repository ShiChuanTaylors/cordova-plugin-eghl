'use strict';

var argscheck = require('cordova/argscheck'),
    exec      = require('cordova/exec');

var eGHL = function() {
    var name = "eGHL Cordova Plugin";
    var version = "1.1.0"
}

eGHL.prototype = {
    makePayment: function(params, success, error)
    {
        argscheck.checkArgs('ofF', 'eGHL.makePayment', arguments);
        exec(
            success,
            function (err) {
                if(typeof err != 'string') error(err)
                else {
                    // eGHL Android SDK's TxnMessage is escaped.
                    err = decodeURIComponent(err)
                    err = err.replace(/\+/g, " ")
                    error(err)
                }
            },
            'eGHL',
            'makePayment',
            [params]
        );
    },

    mpeRequest: function (params, success, error)
    {
        argscheck.checkArgs('ofF', 'eGHL.mpeRequest', arguments);
        exec(success, error, 'eGHL', 'mpeRequest', [params]);
    },
};

module.exports = new eGHL();
