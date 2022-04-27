const datetag = document.querySelector(".calender");
const timetag = document.querySelector(".clock");
const date = new Date();
datetag.innerHTML = ` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
timetag.innerHTML = ` ${date.getHours()}:${date.getMinutes()}`;
const icons = [
  "",
  "fab fa-html5",
  "fab fa-css3",
  "fab fa-js",
  "fab fa-python",
  "fab fa-php",
];
const skills = new Set();
const btn = document.querySelector("#btn");
const choose = document.querySelector("#skill");
const ulList = document.querySelector(".list");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (skills.has(choose.selectedIndex) === false) {
    skills.add(choose.selectedIndex);
    let li = document.createElement("li");
    li.innerHTML = `<i class="${icons[choose.selectedIndex]}"></i> `;
    li.appendChild(
      document.createTextNode(choose.options[choose.selectedIndex].text)
    );
    ulList.appendChild(li);
  }
});
