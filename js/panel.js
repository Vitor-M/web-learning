let navBar = document.querySelector(".leftPanel");
let navHandler = document.querySelector(".leftPanelHandler");

navHandler.addEventListener("click", () => {
  navBar.style.display = navBar.style.display == "flex" ? "none" : "flex";
});  