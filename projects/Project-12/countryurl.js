const country = document.getElementById("country");
const btn = document.getElementById("send");
btn.addEventListener("click", URLcountry);
function URLcountry() {
  let link = window.location.href;
  const url = new URL(link);
  let code = url.search.split("=").pop();
  if (country.value === "FI") {
    window.alert(
      "Tevetuloa! \n The protocol is: " +
        url.protocol +
        " \n The country code is: " +
        country.value
    );
  } else {
    window.alert(
      "The protocol is: " +
        url.protocol +
        " \n The country code is: " +
        country.value
    );
  }
}
