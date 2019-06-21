
$(document).ready(function () {

    fish1 = [
        "fish1",
        "Horse Mackerel",
        "Squid",
        "Olive Flounder",
        "Red Snapper",
        "Blowfish",
        "Clown Fish",
        "Surgeonfish",
        "Sea Horse",
        "Football Fish",
        "Barred Knifejaw",
        "Tuna",
        "Napoleonfish",
        "Dab"
    ];

    fish2 = [
        "fish2",
        "Pale Chub",
        "Crucian Carp",
        "Yellow Perch",
        "Black Bass",
        "Crawfish",
        "Rainbow Trout",
        "Loach",
        "Neon Tetra",
        "Koi",
        "King Salmon"
    ];

    bugs = [
        "bug",
        "Fruit Beetle",
        "Monarch Butterfly",
        "Tiger Butterfly",
        "Horned Dynastid",
        "Miyama Stag",
        "Jewel Beetle",
        "Agrias Butterfly",
        "Emperor Butterfly",
        "Goliath Beetle",
        "Cyclommatus Stag"
    ];

    fruit = [
        "fruit",
        "Apple",
        "Orange",
        "Pear",
        "Peach",
        "Cherry",
        "Coconut",
        "Lemon",
        "Grapes",
        "Lychee",
        "Perfect Apple",
        "Perfect Orange",
        "Perfect Pear",
        "Perfect Peach",
        "Perfect Cherry",
        "Perfect Lemon",
        "Perfect Grapes",
        "Perfect Lychee"
    ];

    shells = [
        "shell",
        "Conch Shell",
        "Coral",
        "Scallop Shell",
        "Pearl-Oyster Shell"
    ];

    items = [fish1, fish2, bugs, fruit, shells];

    for (var i = 0; i < items.length; i++) {
        var array = items[i];
        for (var j = 1; j < array.length; j++) {
            if (j < 10) {
                $(".item-container").append("<img src='./img/items/" + array[0] + "_0" + j + ".png' title='" + array[j] + "' class='item-image' />");
            } else {
                $(".item-container").append("<img src='./img/items/" + array[0] + "_" + j + ".png' title='" + array[j] + "' class='item-image' />");
            }
        }
    }

    $(".item-image").click(function () {
        if ($(this).css("opacity") == "1") {
            $(this).css("opacity", "0.25");
        } else {
            $(this).css("opacity", "1");
        }
    });
});
