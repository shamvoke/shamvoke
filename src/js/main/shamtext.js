document.addEventListener("DOMContentLoaded", function () {
  const shamTexts = [
    "➤ All cursors have a point! Let that click.",
    "➤ Crafting pixels into art, one design at a time.",
    "➤ Kindness is free, sprinkle that stuff everywhere.",
    "➤ Creativity is just intelligence having fun.",
    "➤ Every click tells a story — what’s yours?"
  ];

  const randomText = shamTexts[Math.floor(Math.random() * shamTexts.length)];
  document.getElementById("shamtext").textContent = randomText;
});
