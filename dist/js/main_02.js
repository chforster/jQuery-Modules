jQuery(function ($) {
    "use strict";

    var $inventar = $("#inventar tbody"),

        mengen = $inventar
            .find("td:nth-child(2)")
            .map(function (index, element) {
                return $(element).text();
            }).get(),// .get() unwrapped ein jQuery Objekt
        prices = $inventar
            .find("td:nth-child(3)")
            .map(function (index, element) {
                return $(element).text();
            }).get(),

        sum = $.sum(mengen),
        average = $.average(prices);

    $("#sum").find("td:nth-child(2)").text(sum);
    $("#average").find("td:nth-child(3)").text(average);

});
