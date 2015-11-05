// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
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

    $.fn.shadow = function () { // .fn erzeugt Prototype, welcher für alle elemente nutzbar ist
        return this.each(function () {
            var i,
                $original = $(this);

            for (i = 1; i <=5; i+=1) {
                $original.clone()
                    .css({
                        position: 'absolute',
                        top: $original.offset().top + i,
                        left: $original.offset().left + i,
                        margin: 0,
                        zIndex : -1,
                        opacity: 0.2
                    })
            .appendTo("body");
            }
        });
    };
}(jQuery));
