//Date and Time
const datetag = document.querySelector(".calender");
const timetag = document.querySelector(".clock");
const date = new Date();
datetag.innerHTML = ` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
timetag.innerHTML = ` ${date.getHours()}:${date.getMinutes()}`;

//get HTML tags
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const gender = document.getElementById("gender");
const age = document.getElementById("age");
const email = document.getElementById("email");
const url = document.getElementById("url");
const btnform = document.getElementById("btn-form");
const btnreset = document.getElementById("btn-reset");
const info = document.querySelector(".list");
const comments = document.getElementById("comments");
const errorLabel = document.querySelectorAll(".error");
const errorMessage = (field, index, message) => {
  const parent = field.closest(".form-group");
  errorLabel[index].innerHTML = message;
};
//Form validation
btnform.addEventListener("click", (e) => {
  e.preventDefault();
  let error = false;

  let urlregex = new RegExp(
    '/((?:(?:http?|ftp)[s]*://)?[a-z0-9-%/&=?.]+.[a-z]{2,4}/?([^s<>#%",{}\\|\\^[]`]+)?)/gi'
  );
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  //Conditional statements
  if (fName.value == "" || fName.value.length > 25) {
    errorMessage(fName, 0, "First name must be less than 25 characters!!!!");
    error = true;
  }

  if (lName.value == "" || lName.value.length > 25) {
    errorMessage(lName, 1, "Last name must be less than 25 characters!!!");
    error = true;
  }

  if (gender.value == "-1") {
    errorMessage(gender, 2, "Please select a gender");
    error = true;
  }
  if (age.value == "" || Number(age.value) < 18 || Number(age.value) > 99) {
    errorMessage(age, 3, "Enter an age greater than 18 and less than 100.");
    error = true;
  }
  if (
    email.value == "" ||
    regex.test(email.value) == false ||
    email.value.length > 49
  ) {
    errorMessage(
      email,
      4,
      "Please enter a valid email less than 50 characters!!!"
    );
    error = true;
  }

  if (
    url.value == "" ||
    url.value.match(urlregex) == false ||
    url.value.length > 49
  ) {
    errorMessage(
      url,
      5,
      "Please enter a valid url less than 50 characters!!! ."
    );
    error = true;
  }

  if (comments.value == "" || comments.value.length > 255) {
    errorMessage(comment, 6, "Comments must not exceed 255 characters!!!");
    error = true;
  }

  //Form data
  if (!error) {
    document.querySelector("h3").textContent =
      "Form data submitted successfully.";
    info.innerHTML = `
    <li>First Name: <span>${fName.value}</span></li> 
    <li>Last Name: <span>${lName.value}</span></li> 
    <li>Gender: <span>${gender.options[gender.selectedIndex].text}</span></li> 
    <li>Age: <span>${age.value}</span></li> 
    <li>Email: <span>${email.value}</span></li> 
    <li>Website: <span>${url.value}</span></li> 
    <li>Comments: <span>${comments.value}</span></li>`;
  }
  resetForm(e);
});

//Reset btn
btnreset.addEventListener("click", resetForm);
function resetForm(e) {
  e.preventDefault();
  errorLabel.forEach(label=>label.textContent="")
  fName.value =
    lName.value =
    age.value =
    email.value =
    url.value =
    comments.value =
      "";
  gender.selectedIndex = 0;
}
