const SliderBox = document.getElementById("SliderBox")
const SliderCards = document.querySelectorAll('.SliderCard');

SliderCards[2].classList.add("Active")

console.log(SliderBox.scrollWidth);

SliderCards.forEach( card => {

  card.addEventListener('click', () => {

    SliderCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('Active');
      }
    });

    card.classList.toggle('Active');
    
  });
  
});
