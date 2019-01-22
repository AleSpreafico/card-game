const cards = document.querySelectorAll('.card');

let firstCard = null,
    secondCard = null;

function flip() {


    if (this === firstCard) return;


    if (firstCard === null) {
        this.classList.add('flip');
        firstCard = this;
    } else if (secondCard === null) {
        this.classList.add('flip');
        secondCard = this;
        checkScore();
    }
}

function checkScore() {
    if (firstCard.dataset.id === secondCard.dataset.id) {
        deleteCards();
        return;
    }

    setTimeout(unflip, 1000);
}

function unflip() {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    reset();
}

function deleteCards() {
    firstCard.classList.add('disabled');
    firstCard.removeEventListener('click', flip);
    secondCard.classList.add('disabled');
    secondCard.removeEventListener('click', flip);
    reset();
}

function reset() {
    firstCard = null;
    secondCard = null;
}

function shuffle() {
    cards.forEach((card) => {
      let random = Math.floor(Math.random() * 12);
      card.style.order = random;
    });
}

shuffle();

cards.forEach((card) => {
    card.addEventListener('click', flip)
});