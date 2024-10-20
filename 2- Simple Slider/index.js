const Slider = document.querySelector('.Slider-ItemList')
const NextBtn = document.getElementById('Next')
const PervBtn = document.getElementById('Perv')

NextBtn.onclick = ()=>{
    Slider.append(Slider.querySelector('img:first-child'))
}
PervBtn.onclick = ()=>{
    Slider.prepend(Slider.querySelector('img:last-child'))
}

setInterval(()=>{
    Slider.append(Slider.querySelector('img:first-child'))
},7000)