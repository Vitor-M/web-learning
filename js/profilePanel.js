let modal = document.querySelector("#profileModal");
let modalOpener = document.querySelector(".profileSlide");
let modalCloser = document.querySelector(".modalCloser");

modalOpener.addEventListener("click", () => {
  modal.style.display = "flex";
});
modalCloser.addEventListener("click", () => {
  modal.style.display = "none";
});