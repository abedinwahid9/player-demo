// Toggle Password text show
// document
//   .querySelector(".toggle-password")
//   .addEventListener("click", function () {
//     const passwordInput = document.getElementById("password");
//     const type =
//       passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);
//     this.classList.toggle("toggle-password--show");
//   });

const tab = document.querySelectorAll(".tab");

tab.forEach((customBtn) => {
  customBtn.addEventListener("click", () => {
    tab.forEach((btn) => {
      btn.classList.remove("active");
    });
    customBtn.classList.add("active");
  });
});

const customBtn3 = document.querySelectorAll(".custom-btn3");

customBtn3.forEach((customBtn) => {
  customBtn.addEventListener("click", () => {
    customBtn3.forEach((btn) => {
      btn.classList.remove("active");
    });
    customBtn.classList.add("active");
  });
});
