jQuery(function ($) {
    "use strict";

    $("h2").shadow({
        copies: 5,
        opacity: 0.5,
        copyOffset: function (index) {
            return {x: -index, y: index *0.5};
        }
    }).css("color", "orange");

});
