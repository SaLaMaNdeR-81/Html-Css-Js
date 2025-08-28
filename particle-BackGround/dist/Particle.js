var P = document.getElementById("Particles");
var X = document.documentElement.scrollWidth;
var Y = document.documentElement.scrollHeight;
var Loop = Math.floor(X * Y / 10000) * 2;
for (var i = 0; i < Loop; i++) {
    var E = document.createElement("span"); // هر بار span جدید
    E.classList.add("star");
    E.style.left = Math.random() * 100 + "%";
    E.style.top = Math.random() * 100 + "%";
    P.append(E);
}
// console.log(X,Y);
console.log(Loop);
