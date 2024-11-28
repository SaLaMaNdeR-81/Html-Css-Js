const Box = document.getElementById("Box") as HTMLElement
const Traker = document.getElementById("Traker") as HTMLElement
const ElementsGroup = document.querySelectorAll("[Element]")

Box.addEventListener('mousemove',(e)=>{
    const X = e.pageX;
    const Y = e.pageY;
    Traker.style.left = `${X}px`
    Traker.style.top = `${Y}px`
})



ElementsGroup.forEach((Item)=>{
    Item.addEventListener("mouseenter",()=>{
        Traker.setAttribute("Active","")
    })
    Item.addEventListener("mouseleave",()=>{
        Traker.removeAttribute("Active")
    })
})

console.log("Hello,World!");
