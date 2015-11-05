jQuery(function ($) {
    "use strict";

    $.fn.shadow.defaults.copies = 2;
    $("h2").shadow({
        opacity: 0.5,
        copyOffset: function (index) {
            return {x: -index, y: index *0.5};
        }
    }).css("color", "orange");

});
