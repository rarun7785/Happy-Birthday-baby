const poem = `
In the hush of stars where the moonlight flows,
A name is whispered — the one my heart knows.
💗, my calm in a world so loud,
Your kindness lifts me like a cloud.

Simplicity wraps you like a soft-spun spell,
In your gentle eyes, my soul could dwell.
You're the melody in my quietest song,
With you, even the nights feel warm and long.

Today, the sky dances just for you,
In dreams painted pink and oceans of blue.
I may not gift the stars above,
But I offer you all my heart and love.

So blow your candles, make your wish true —
And know I made mine, the day I found you.
`;

const poemDiv = document.getElementById('poemText');
poemDiv.textContent = poem;

function togglePoem() {
  poemDiv.style.display = poemDiv.style.display === "none" ? "block" : "none";
}
