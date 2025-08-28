const P = document.getElementById("Particles") as HTMLDivElement;

if (P) {
  const X = P.offsetWidth;
  const Y = P.offsetHeight;

  const Loop = Math.floor(X * Y / 10000);

  for (let i = 0; i < Loop; i++) {
    const E = document.createElement("span");
    E.style.position = "absolute";
    E.style.left = `${Math.random() * 100}%`;
    E.style.top = `${Math.random() * 100}%`;
    const size = 5 + Math.random() * 15;
    E.style.width = `${size}px`;
    E.style.height = `${size}px`;
    // E.style.backgroundColor = "red";
    E.style.opacity = "0.7";
    E.style.borderRadius = "50%";
    P.appendChild(E);
  }

  console.log(`Particles generated: ${Loop}`);
}
