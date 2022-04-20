const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const audio = document.getElementById("myaudio");
const text =
  "I took an ........ to the heart I ......... kissed a mouth that tastes like yours Strawberries and somethin' more Ooh yeah, I want it all  Lipstick on my ......... (ooh) Fill up the ..........., we can drive real far Go dancin' ........... the stars  Ooh yeah, I want it all   Mm, you got me feelin' like I wanna be that guy, I wanna ............ your eyes  I wanna drink that smile, I wanna feel like I'm Like my soul's on fire, I wanna ........ all day and all night  Yeah, you got me singin' like Ooh, I love it ....... you do it like that. And when you're close up, give me the........., you wanna dance 'til the sunlight........ And when they say the party's over, then we'll bring it right back (oh no) And we'll say, ooh, I ......... when you do it like that And when ........, give me the shivers Oh baby, you wanna dance 'til the sunlight cracks And when they say the party's over, then we'll bring it right back, hey";
let idx = 1;
let speed = 300 / speedEl.value;

audio.addEventListener("playing", function () {
  writeText();
});
function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}
speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
