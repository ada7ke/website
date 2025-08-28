// document.getElementById('hamburger').addEventListener('click', () => {
//   document.getElementById('nav-links').classList.toggle('open');
//   hamburger.classList.toggle('open');
// });

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



// $(document).ready(function() {
//   var owl = $('.owl-carousel');
//   owl.owlCarousel({
//     loop: true,
//     center: true,
//     nav: true,
//     navSpeed: 1000,
//     // dots: true,
//     margin: 10,
//     autoWidth: true,
//     autoplay: true,
//     autoplayTimeout: 6000,
//     autoplayHoverPause: true,
//     autoplaySpeed: 2000
//   });

//   let scrollTimeout;
//   owl.on('mousewheel', function (e) {
//     e.preventDefault();
//     if (scrollTimeout) return;

//     scrollTimeout = setTimeout(() => {
//       scrollTimeout = null;
//     }, 300);

//     card = document.getElementsByClassName("project-card");
//     if (e.originalEvent.deltaY > 0) {
//       owl.trigger('next.owl.carousel', [1000]);
//       card.style.transition = 'transform 2s ease, filter 2s ease';
//     } else {
//       owl.trigger('prev.owl.carousel', [1000]);
//       card.style.transition = 'transform 2s ease, filter 2s ease';
//     }
    
//     e.preventDefault();

//   });
// });




