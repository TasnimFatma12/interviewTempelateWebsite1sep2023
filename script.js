// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });







  const track = document.getElementById('carouselTrack');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  let currentIndex = 0;
  const itemWidth = 310; // item width including margin

  updateButtonVisibility();


  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarouselPosition();
      updateButtonVisibility();

    }

  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < track.children.length - 1) {
      currentIndex++;
      updateCarouselPosition();
      updateButtonVisibility();
    }
  });

  function updateCarouselPosition() {
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  function updateButtonVisibility() {
    prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
  }