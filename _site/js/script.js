document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
  hamburger.classList.toggle('open');
});

document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const faq = question.parentElement;
    const answer = faq.querySelector('.faq-answer');

    if (faq.classList.contains('open')) {
      answer.style.height = answer.scrollHeight + 'px';
      requestAnimationFrame(() => {
        answer.style.transition = 'height 1s ease';
        answer.style.height = '0px';
      });
      faq.classList.remove('open');
    } else {
      answer.style.transition = 'height 0.3s ease';
      answer.style.height = answer.scrollHeight + 'px';
      faq.classList.add('open');
    }
  });
});



$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    center: true,
    nav: true,
    navSpeed: 1000,
    // dots: true,
    margin: 10,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000
  });

  let scrollTimeout;
  owl.on('mousewheel', function (e) {
    e.preventDefault();
    if (scrollTimeout) return;

    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
    }, 300);

    card = document.getElementsByClassName("project-card");
    if (e.originalEvent.deltaY > 0) {
      owl.trigger('next.owl.carousel', [1000]);
      card.style.transition = 'transform 2s ease, filter 2s ease';
    } else {
      owl.trigger('prev.owl.carousel', [1000]);
      card.style.transition = 'transform 2s ease, filter 2s ease';
    }
    
    e.preventDefault();

  });
});















// const wrapper = document.getElementById("carouselWrapper");
// const track = document.getElementById("carouselTrack");
// const heroHeight = 650;

// // Step 2: Measure card width
// let cardWidth = getCardWidth();
// function getCardWidth() {
//   const card = track.querySelector('.project-card');
//   const style = window.getComputedStyle(card);
//   const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
//   return card.offsetWidth + margin;
// }

// // Step 3: Set initial position to middle (original set)
// let currentIndex = originalCards.length;
// let isInCarousel = false;
// track.style.transition = "none";
// track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

// function lockScrollPosition() {
//   if (isInCarousel) {
//     window.scrollTo(0, heroHeight);
//     requestAnimationFrame(lockScrollPosition);
//   }
// }

// // Step 4: Scroll logic
// function scrollToIndex(index, animate = true) {
//   if (animate) {
//     track.style.transition = "transform 0.3s ease";
//   } else {
//     track.style.transition = "none";
//   }
//   track.style.transform = `translateX(${-index * cardWidth}px)`;
// }

// // Handle snapping & looping
// function onWheel(e) {
//   const scrollTop = window.scrollY;
//   if (scrollTop >= heroHeight) {
//     if (!isInCarousel) {
//       isInCarousel = true;
//       lockScrollPosition();
//     }

//     e.preventDefault();

//     // Scroll one card per tick
//     const direction = e.deltaY > 0 ? 1 : -1;
//     currentIndex += direction;
//     scrollToIndex(currentIndex);

//     // Disable input briefly to prevent fast scroll skipping
//     window.removeEventListener("wheel", onWheel);
//     setTimeout(() => {
//       // Step 5: Detect if we hit clones and jump back
//       if (currentIndex >= originalCards.length * 2) {
//         currentIndex -= originalCards.length;
//         scrollToIndex(currentIndex, false);
//       } else if (currentIndex < originalCards.length) {
//         currentIndex += originalCards.length;
//         scrollToIndex(currentIndex, false);
//       }
//       window.addEventListener("wheel", onWheel, { passive: false });
//     }, 350); // Wait for animation to finish
//   } else {
//     isInCarousel = false;
//   }
// }

// window.addEventListener("wheel", onWheel, { passive: false });

// window.addEventListener("resize", () => {
//   cardWidth = getCardWidth();
//   scrollToIndex(currentIndex, false);
// }); const carousel = document.getElementById('carousel');


