const cards = document.querySelectorAll('.card');
let currentActiveCalss = cards[0];

cards.forEach((card) => {
  card.addEventListener('click', () => {
    // Remove the active calss.
    currentActiveCalss.classList.remove('active');

    // Active clicked card.
    card.classList.add('active');

    // Update the current active class.
    currentActiveCalss = card;
  });
});
