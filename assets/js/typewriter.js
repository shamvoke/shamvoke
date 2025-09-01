const words = [" designer ", " developer ", "meka "];
let i = 0, j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 160;
const target = document.getElementById("typewriter");

function type() {
  currentWord = words[i];

  if (isDeleting) {
    target.textContent = currentWord.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    target.textContent = currentWord.substring(0, j++);
    if (j > currentWord.length) {
      if (i === words.length - 1) {
        isDeleting = true;
        setTimeout(type, 7000);
        return;
      } else {
        isDeleting = true;
        setTimeout(type, 1600);
        return;
      }
    }
  }

  setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();