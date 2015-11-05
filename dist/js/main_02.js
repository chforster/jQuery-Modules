jQuery(function ($) {
    "use strict";

    var $inventar = $("#inventar tbody"),

        findMap = function(array, column) {
            return array
                .find("td:nth-child(" + column + ")")
                .map(function (index, element) {
                    return $(element).text();
                }).get(); // .get() unwrapped ein jQuery Objekt
        },
        mengen = findMap($inventar, 2),
        prices = findMap($inventar, 3),

        sum = $.sum(mengen),
        average = $.average(prices);

    $("#sum").find("td:nth-child(2)").text(sum);
    $("#average").find("td:nth-child(3)").text(average);

});
