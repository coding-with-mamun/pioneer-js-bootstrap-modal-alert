// get elements
const applyBtn = document.getElementById("apply");
const mainModal = document.querySelector(".main_modal");
const editing = document.getElementById("editing");
const discard = document.getElementById("discard");
const mainClose = document.querySelector(".main_modal  .close");
const customClose = document.querySelector(".custom_alert  .close");
const custom_alert = document.querySelector(".custom_alert");

applyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mainModal.classList.add("active");
});

mainClose.addEventListener("click", (e) => {
  custom_alert.style.display = "flex";
});

customClose.addEventListener("click", (e) => {
  custom_alert.style.display = "none";
});

editing.addEventListener("click", (e) => {
  custom_alert.style.display = "none";
});

discard.addEventListener("click", (e) => {
  custom_alert.style.display = "none";
  mainModal.classList.remove("active");
});

mainModal.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target == this) {
    mainModal.classList.remove("active");
  }
});
