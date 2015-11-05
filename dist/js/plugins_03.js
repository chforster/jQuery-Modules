// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function ($) {
    "use strict";

    //$.extend({
    $.SWAROVSKI = {
        sum: function (array) {
            var total = 0;
            $.each(array, function (index, value) {
                value = $.trim(value);
                value = parseFloat(value) || 0;
                total += value;
            });

            return total;
        },


        average: function (array) {
            if ($.isArray(array)) {
                return this.sum(array) / array.length;
            }
            return '';
        }
    };
}(jQuery));
