const phrases = [
  "All cursors have a point! Let that click.",
  "Crafting pixels into art, one design at a time.",
  "Kindness is free, sprinkle that stuff everywhere.",
  "Creativity is just intelligence having fun."
];

const target = document.getElementById("shamtext");

const typewriter = new Typewriter(target, {
  loop: true,
  delay: 55,
  deleteSpeed: 30
});

phrases.forEach(text => {
  typewriter
    .typeString(text)
    .pauseFor(1800)
    .deleteAll()
    .pauseFor(400);
});

typewriter.start();
