let aim = document.getElementById("btn");

aim.addEventListener("click", function () {
  let js = document.getElementById("js").value;
  let h = document.getElementById("h").value;
  let c = document.getElementById("c").value;
  let grade = "";

  let total = Number(js) + Number(h) + Number(c);

  let per = (total * 100) / 300;
  if (per >= 80 && per < 100) {
    grade = "A";
  } else if (per >= 60 && per < 79) {
    grade = "B";
  } else if (per >= 40 && per < 59) {
    grade = "C";
  } else {
    grade = "FAIL!!";
    window.alert(
      "Please visit the administrative office for academic advising."
    );
  }

  document.getElementById("text").innerHTML = `Course total: ${total}  <br>
  Percentage: ${per.toFixed()}% <br> Final Grade: ${grade} `;
});
