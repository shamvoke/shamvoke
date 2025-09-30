const phrases = [
    "➤ All cursors have a point! Let that click.",
    "➤ Crafting pixels into art, one design at a time.",
    "➤ Kindness is free, sprinkle that stuff everywhere.",
    "➤ Creativity is just intelligence having fun.",
    "➤ Every click tells a story - what’s yours?"
];

function updateText() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

    const textElement = document.getElementById('shamtext');

    if (textElement) {
        textElement.textContent = randomPhrase;
    }
}
updateText();
setInterval(updateText, 6000);