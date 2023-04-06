const input = document.querySelector(".input");
const btnCheck = document.querySelector(".btnCheck");
const answer = document.querySelector(".answer");

const displayAnswer = function () {
  let originalText = input.value;
  let text = input.value.toLowerCase();
  let counter = 0;

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      counter++;
    }
  }

  let vowel;
  if (counter == 1) {
    vowel = "vowel";
  } else {
    vowel = "vowels";
  }

  answer.innerHTML = `${originalText} has ${counter} ${vowel}`;
};
