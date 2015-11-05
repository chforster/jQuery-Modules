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


    $.fn.shadow = function (options) { // .fn erzeugt Prototype, welcher für alle elemente nutzbar ist
        var defaults = {
            copies: 5,
            opacity: 0.1,
            copyOffset: function (index) {
                return {x: index, y: index};
            }
        };
        options = $.extend(defaults, options);
        return this.each(function () {
            var i,
                offset,
                $original = $(this);

            for (i = 1; i <=options.copies; i+=1) {
                offset = options.copyOffset(i);
                $original.clone()
                    .css({
                        position: 'absolute',
                        top: $original.offset().top + offset.y,
                        left: $original.offset().left + offset.x,
                        margin: 0,
                        zIndex : -1,
                        opacity: options.opacity
                    })
            .appendTo("body");
            }
        });
    };
}(jQuery));
