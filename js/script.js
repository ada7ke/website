document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const faq = question.parentElement;
    faq.classList.toggle('open');
  });
});
