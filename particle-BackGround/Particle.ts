const P = document.getElementById("Particles") as HTMLDivElement;

const X = document.documentElement.scrollWidth;
const Y = document.documentElement.scrollHeight
const Loop = Math.floor(X * Y / 10000) * 2
for (let i = 0; i < Loop; i++) {
  const E = document.createElement("span");
  E.classList.add("star");
  E.style.left = `${Math.random() * 100}%`;
  E.style.top = `${Math.random() * 100}%`;
  P.append(E);
}



// console.log(X,Y);
console.log(Loop);
