const questionsAndAnswers = {
  1: {
    question: "A large flightless bird.",
    answer: "OSTRICH",
  },
  2: {
    question: "A sweet yellow fruit.",
    answer: "BANANA",
  },
  3: {
    question: "An ocean between Europe and America.",
    answer: "ATLANTIC",
  },
  4: {
    question: "The capital of Japan.",
    answer: "TOKYO",
  },
  5: {
    question: "A famous fictional detective.",
    answer: "SHERLOCK",
  },
  6: {
    question: "A red gemstone.",
    answer: "RUBY",
  },
  7: {
    question: "A popular social media platform.",
    answer: "TWITTER",
  },
  8: {
    question: "The currency of the European Union.",
    answer: "EURO",
  },
  9: {
    question: "A planet known as the 'Red Planet'.",
    answer: "MARS",
  },
  10: {
    question: "A citrus fruit.",
    answer: "ORANGE",
  },
  11: {
    question: "The largest ocean on Earth.",
    answer: "PACIFIC",
  },
  12: {
    question: "A famous Italian city known for canals.",
    answer: "VENICE",
  },
  13: {
    question: "A flying nocturnal mammal.",
    answer: "BAT",
  },
  14: {
    question: "The capital of Australia.",
    answer: "CANBERRA",
  },
  15: {
    question: "A famous Egyptian river.",
    answer: "NILE",
  },
  16: {
    question: "A popular fast-food chain.",
    answer: "MCDONALDS",
  },
  17: {
    question: "A small, green vegetable.",
    answer: "PEAS",
  },
  18: {
    question: "A mythical fire-breathing creature.",
    answer: "DRAGON",
  },
  19: {
    question: "A famous mountain range in Europe.",
    answer: "ALPS",
  },
  20: {
    question: "The largest mammal on Earth.",
    answer: "WHALE",
  },
  21: {
    question: "A popular computer programming language.",
    answer: "PYTHON",
  },
  22: {
    question: "A tropical fruit with a hard outer shell.",
    answer: "COCONUT",
  },
  23: {
    question: "The capital of Russia.",
    answer: "MOSCOW",
  },
  24: {
    question: "A celestial body that orbits the Earth.",
    answer: "MOON",
  },
  25: {
    question: "A popular mobile operating system.",
    answer: "ANDROID",
  },
  26: {
    question: "A transparent gemstone.",
    answer: "DIAMOND",
  },
  27: {
    question: "A famous American inventor.",
    answer: "EDISON",
  },
  28: {
    question: "A popular social media platform.",
    answer: "FACEBOOK",
  },
  29: {
    question: "The capital of Brazil.",
    answer: "BRASILIA",
  },
  30: {
    question: "A musical instrument with keys.",
    answer: "PIANO",
  },
};

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let counterIncorrectGuesses = 0;
let secretWord;

function resetGame() {
  counterIncorrectGuesses = 0;
  document.body.innerHTML = "";
  startHangman();
}

function openModal(isWin) {
  const body = document.body;

  const modalWrapper = document.createElement("div");
  modalWrapper.className = "modal-wrapper";
  body.append(modalWrapper);

  const modal = document.createElement("div");
  modal.className = "modal";
  modalWrapper.append(modal);

  const modalContent = document.createElement("div");
  modalContent.className = "modal__content";
  modal.append(modalContent);

  const modalGeneralMessage = document.createElement("div");
  modalGeneralMessage.className = "modal__general-message";
  modalContent.append(modalGeneralMessage);

  const spanGeneralMessage = document.createElement("span");
  spanGeneralMessage.textContent = isWin
    ? "Congratulations! You guessed the secret word."
    : "Unfortunately, you didn't manage to guess the secret word.";
  modalGeneralMessage.append(spanGeneralMessage);

  const modalSecretWord = document.createElement("div");
  modalSecretWord.className = "modal__secret-word";
  modalContent.append(modalSecretWord);

  const spanSecretWord = document.createElement("span");
  spanSecretWord.textContent = `The secret word: ${secretWord}`;
  modalSecretWord.append(spanSecretWord);

  const modalButton = document.createElement("button");
  modalButton.className = "modal__button";
  modalContent.append(modalButton);

  const spanModalButton = document.createElement("span");
  spanModalButton.textContent = "PLAY AGAIN";
  modalButton.append(spanModalButton);

  modalButton.addEventListener("click", function () {
    resetGame();
  });
}

function startHangman() {
  const body = document.body;
  body.className = "wrapper";

  const mainWrapper = document.createElement("main");
  mainWrapper.classList.add("wrapper-content");
  body.append(mainWrapper);

  const sectionHangman = document.createElement("section");
  sectionHangman.className = "hangman";
  mainWrapper.append(sectionHangman);

  const hangmanImg = document.createElement("div");
  hangmanImg.className = "hangman__img";
  sectionHangman.append(hangmanImg);

  const hangmanGallows = document.createElement("img");
  hangmanGallows.className = "hangman__gallows";
  hangmanGallows.src = "./assets/image/gallows.svg";
  hangmanGallows.alt = "";
  hangmanImg.append(hangmanGallows);

  const hangmanHead = document.createElement("img");
  hangmanHead.className = "hangman__head";
  hangmanHead.src = "./assets/image/head.svg";
  hangmanHead.alt = "";
  hangmanImg.append(hangmanHead);

  const hangmanHandOne = document.createElement("img");
  hangmanHandOne.className = "hangman__hand-one";
  hangmanHandOne.src = "./assets/image/hand-one.svg";
  hangmanHandOne.alt = "";
  hangmanImg.append(hangmanHandOne);

  const hangmanHandTwo = document.createElement("img");
  hangmanHandTwo.className = "hangman__hand-two";
  hangmanHandTwo.src = "./assets/image/hand-two.svg";
  hangmanHandTwo.alt = "";
  hangmanImg.append(hangmanHandTwo);

  const hangmanBody = document.createElement("img");
  hangmanBody.className = "hangman__body";
  hangmanBody.src = "./assets/image/body.svg";
  hangmanBody.alt = "";
  hangmanImg.append(hangmanBody);

  const hangmanLegOne = document.createElement("img");
  hangmanLegOne.className = "hangman__leg-one";
  hangmanLegOne.src = "./assets/image/leg-one.svg";
  hangmanLegOne.alt = "";
  hangmanImg.append(hangmanLegOne);

  const hangmanLegTwo = document.createElement("img");
  hangmanLegTwo.className = "hangman__leg-two";
  hangmanLegTwo.src = "./assets/image/leg-two.svg";
  hangmanLegTwo.alt = "";
  hangmanImg.append(hangmanLegTwo);

  const hangmanName = document.createElement("p");
  hangmanName.className = "hangman__name";
  hangmanName.textContent = "HANGMAN";
  hangmanImg.append(hangmanName);

  const sectionContent = document.createElement("section");
  sectionContent.className = "content";
  mainWrapper.append(sectionContent);

  const secretWordElement = document.createElement("div");
  secretWordElement.className = "content__secret-word";
  sectionContent.append(secretWordElement);

  const hangmanParts = [
    hangmanHead,
    hangmanBody,
    hangmanHandOne,
    hangmanHandTwo,
    hangmanLegOne,
    hangmanLegTwo,
  ];
  let randomKey = Math.ceil(Math.random() * 30);
  let randomQuestionAndAnswer = questionsAndAnswers[randomKey];

  secretWord = randomQuestionAndAnswer["answer"];
  console.log("Secret word: ", secretWord);
  const wordArray = secretWord.split("");

  const question = document.createElement("div");
  question.className = "content__question";
  question.textContent = randomQuestionAndAnswer["question"];
  sectionContent.append(question);

  const incorrectGuesses = document.createElement("div");
  incorrectGuesses.className = "content__incorrect-guesses";
  sectionContent.append(incorrectGuesses);

  const incorrectGuessesText = document.createElement("p");
  incorrectGuessesText.textContent = `Incorrect guesses: ${counterIncorrectGuesses} / 6`;
  incorrectGuesses.append(incorrectGuessesText);

  const keyboard = document.createElement("div");
  keyboard.className = "content__keyboard";
  sectionContent.append(keyboard);

  alphabet.forEach((letter) => {
    const buttonLetter = document.createElement("button");
    buttonLetter.className = "content__button-letter";
    keyboard.append(buttonLetter);

    const spanLetter = document.createElement("span");
    spanLetter.textContent = letter.toUpperCase();
    buttonLetter.append(spanLetter);
  });

  const buttonLetters = document.querySelectorAll(".content__button-letter");

  wordArray.forEach((letter) => {
    const secretLetter = document.createElement("div");
    secretLetter.className = "content__secret-letter";
    secretWordElement.append(secretLetter);
    const spanSecretLetter = document.createElement("span");
    spanSecretLetter.textContent = letter;
    spanSecretLetter.style.opacity = 0;
    secretLetter.append(spanSecretLetter);
  });

  function processGuess(button) {
    let letter = button.textContent;
    if (secretWord.includes(letter)) {
      let spanSecretLetters = secretWordElement.querySelectorAll(
        ".content__secret-letter span"
      );
      spanSecretLetters.forEach((secretLetter) => {
        if (secretLetter.textContent === letter) {
          secretLetter.parentElement.style.borderBottom = "none";
          secretLetter.style.opacity = 1;
        }
      });
      const allRevealed = Array.from(spanSecretLetters).every(
        (secretLetter) => secretLetter.style.opacity == 1
      );
      if (allRevealed) {
        openModal(true);
      }
    } else {
      counterIncorrectGuesses++;
      incorrectGuessesText.textContent = `Incorrect guesses: ${counterIncorrectGuesses} / 6`;
      if (counterIncorrectGuesses <= hangmanParts.length) {
        hangmanParts[counterIncorrectGuesses - 1].style.display = "block";
      }
      if (counterIncorrectGuesses === 6) {
        openModal(false);
      }
    }
    button.disabled = true;
  }

  buttonLetters.forEach((button) => {
    button.addEventListener("click", function () {
      processGuess(this);
    });

    button.addEventListener("touch", function () {
      processGuess(this);
    });
  });

  function processKeyPress(event) {
    const keyName = event.key.toUpperCase();

    const allRevealed = Array.from(
      secretWordElement.querySelectorAll(".content__secret-letter span")
    ).every((secretLetter) => secretLetter.style.opacity == 1);

    if (!allRevealed) {
      if (keyName.length === 1 && keyName.match(/[A-Z]/i)) {
        const button = Array.from(buttonLetters).find(
          (button) => button.textContent === keyName
        );
        if (button) {
          button.click();
          button.disabled = true;
        }
      }
    }
  }

  document.removeEventListener("keydown", processKeyPress);

  document.addEventListener("keydown", processKeyPress);
}

startHangman();
