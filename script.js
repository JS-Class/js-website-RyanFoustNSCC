"use strict"

$(document).ready( () => {
    // specify accordion options
    $("#accordion").accordion({
        header: "h4",
        event: "click",
        heightStyle: "content"
    });

    // specify tooltip options
    $(".certList").tooltip({
        // specify element[attribute], and attribute will be what shows in the tooltip
        items: "li[title]"
    });
});