function validateEmail() {
    const gmailInputHero = document.getElementById('heroInput').value;
    if (gmailInputHero.endsWith('@gmail.com')) {
        alert("Thanks, but I am not sending.");
    } else {
        alert("Please write a proper email.");
    }
}

function checkEnter(){
    if (event.key === "Enter") {
        validateEmail()
    }
}


// document.addEventListener("DOMContentLoaded", function () {
//     const swiper = new Swiper(".mySwiper", {
//         // Swiper options
//     });

//     const tabButtons = document.querySelectorAll(".tab-button");

//     tabButtons.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             swiper.slideTo(index); // Go to the corresponding slide
//         });
//     });
// });

/// this swipe ris for costumer testimonial
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".card-collab-next-btn",
      prevEl: ".card-collab-back-btn",
    },
  });


// this swiper is for tabs slider 
function swiperGallery() {
    let slidePerView = 4;
    let windowWidth = window.innerWidth;
  
    switch (true) {
      case windowWidth <= 770:
        slidePerView = 1.7;
        break;
      case windowWidth <= 990:
        slidePerView = 2.5;
        break;
      default:
        slidePerView = 4;
        break;
    }
  
    var swiper = new Swiper(".mySwiper3", {
      spaceBetween: 0,
      slidesPerView: slidePerView,
      freeMode: true,
      watchSlidesProgress: true,
    });
  
    var swiper2 = new Swiper(".mySwiper4", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }
  
  swiperGallery();
  
  window.addEventListener('resize', () => {
    swiperGallery();
  });
  
  // end of tabs slider
  















