/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
let navbtn = document.getElementById("nav-btn");
let signup = document.getElementById("menu-item--signup");
let contact = document.getElementById("menu-item--contact");
let home = document.getElementById("menu-item--home");

let toggle = () => {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " menu-show";
  } else {
    x.className = "menu";
  }
};

navbtn.addEventListener("click", () => {
  toggle();
});

signup.addEventListener("click", () => {
  window.location.href = "./apply.html";
});

contact.addEventListener("click", () => {
  window.location.href = "./contact.html";
});

home.addEventListener("click", () => {
  window.location.href = "./";
});
