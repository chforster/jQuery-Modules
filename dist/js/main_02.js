jQuery(function ($) {
    "use strict";

    var $inventar = $("#inventar tbody"),
        mengen = $inventar
            .find("td:nth-child(2)")
            .map(function (index, element) {
                return $(element).text();
            }).get();
    var sum = $.sum(mengen);
    $("#sum").find("td:nth-child(2)").text(sum);

});
