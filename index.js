function validateEmail() {
  const gmailInputHero = document.getElementById('heroInput').value.trim();
 if(gmailInputHero.endsWith("@gmail.com")){
alert("thanks but i am not sending")
 }
 else{
alert("Write a proper email")
 }
}


function checkEnter(){
    if (event.key === "Enter") {
        validateEmail()
    }
}


var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




