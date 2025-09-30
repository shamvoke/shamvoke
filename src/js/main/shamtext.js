document.addEventListener("DOMContentLoaded", function () {
  const shamText = [
    "➤ All cursors have a point! Let that click.",
    "➤ Crafting pixels into art, one design at a time.",
    "➤ Kindness is free, sprinkle that stuff everywhere.",
    "➤ Creativity is just intelligence having fun.",
    "➤ Every click tells a story — what’s yours?"
  ];

  const randomText = shamText[Math.floor(Math.random() * shamText.length)];
  document.getElementById("shamtext").textContent = randomText;
});
