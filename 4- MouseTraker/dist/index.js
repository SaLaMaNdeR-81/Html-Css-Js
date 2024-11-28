var Box = document.getElementById("Box");
var Traker = document.getElementById("Traker");
var ElementsGroup = document.querySelectorAll("[Element]");
Box.addEventListener('mousemove', function (e) {
    var X = e.pageX;
    var Y = e.pageY;
    Traker.style.left = X + "px";
    Traker.style.top = Y + "px";
});
ElementsGroup.forEach(function (Item) {
    Item.addEventListener("mouseenter", function () {
        Traker.setAttribute("Active", "");
    });
    Item.addEventListener("mouseleave", function () {
        Traker.removeAttribute("Active");
    });
});
console.log("Hello,World!");
