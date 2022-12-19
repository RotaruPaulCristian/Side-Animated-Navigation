const sidenav = document.querySelector("#sidenav");
const main = document.querySelector("#main");

// Set the width of the sidenav to 250px and the left margin of the page content to 250px
function openNav() {
  sidenav.style.width = "250px";
  main.style.marginLeft = "250px";
}

// Set the width of the sidenav to 0 and the left margin of the page content to 0
function closeNav() {
  sidenav.style.width = "0";
  main.style.marginLeft = 0;
}
