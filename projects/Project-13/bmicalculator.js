let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let weight = document.getElementById("weight-input").value;
  let height = document.getElementById("height-input").value;
  let bmiValue = (weight / (height * height)) * 10000;
  document.getElementById("bmi-output").value = bmiValue.toFixed(2);
});
