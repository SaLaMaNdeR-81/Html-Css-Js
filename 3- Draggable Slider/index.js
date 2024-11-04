const ItemBox = document.getElementById('ItemBox')
const Actions = document.querySelectorAll('#Action')

const ScrollSpeed = 2;
const ExtetaScroll = 200
let IsDragging = false;

Actions.forEach(Action=>{
    Action.addEventListener("click",()=>{
        ItemBox.style.scrollBehavior = "smooth";
        ItemBox.scrollLeft += Action.className === "Perv" ? -650 : 650;
        ItemBox.style.scrollBehavior = "unset ";
    })
})

setInterval(()=>{
    if (ItemBox.scrollLeft+ItemBox>=ItemBox.scrollWidth){ItemBox.style.display="none"}else{ItemBox.style.display="flex"}
},100)


ItemBox.addEventListener("mousedown",()=> IsDragging = true)
ItemBox.addEventListener("mouseup",()=> IsDragging = false)
ItemBox.addEventListener("mouseleave",()=> IsDragging = false)

ItemBox.addEventListener("mouseup",()=> {
    if(ItemBox.scrollLeft + ItemBox.clientWidth>=ItemBox.scrollWidth){
        if(IsDragging) return;
            ItemBox.style.paddingRight = "unset"
            // ItemBox.scrollLeft -= 10 
    }
})

ItemBox.addEventListener("mousemove",(e)=>{
    if(!IsDragging) return;
    ItemBox.scrollLeft -= e.movementX * ScrollSpeed
    if(ItemBox.scrollLeft + ItemBox.clientWidth>=ItemBox.scrollWidth){
        ItemBox.style.paddingRight = "200px"
    }
})