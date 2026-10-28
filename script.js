const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
  const menuIsOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", menuIsOpen);
  menuToggle.textContent = menuIsOpen ? "✕" : "☰";
});

const bookCarousel = document.getElementById("book-carousel");
const previousButton = document.getElementById("prev-book");
const nextButton = document.getElementById("next-book");

function moveBooks(direction) {
  const cards = Array.from(bookCarousel.children);

  if (cards.length < 2) {
    return;
  }

  if (direction === "next") {
    bookCarousel.appendChild(cards[0]);
  } else {
    bookCarousel.insertBefore(cards[cards.length - 1], cards[0]);
  }
}

nextButton.addEventListener("click", function () {
  moveBooks("next");
});

previousButton.addEventListener("click", function () {
  moveBooks("previous");
});

const joinForm = document.getElementById("join-form");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");

joinForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (emailInput.value.trim() === "") {
    formMessage.textContent = "Digite seu e-mail para continuar.";
    return;
  }

  formMessage.textContent = "Obrigada pelo interesse! Este formulário é demonstrativo e não envia seus dados.";
  joinForm.reset();
});
