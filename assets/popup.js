const popup = document.getElementById("popup");
const form = document.getElementById("popupForm");
const emailInput = document.getElementById("emailInput");
const btnNoThank = document.querySelector(".title-last");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    popup.classList.add("active");
  }, 0);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value;

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    if (validateEmail(email)) {
      localStorage.setItem("popupSubmitted", "true");
      popup.classList.remove("active");
      alert("Thank you for subscribing!");
    } else {
      alert("Please enter a valid email address.");
    }
  });
});

btnNoThank.addEventListener("click", () => {
  popup.classList.remove("active");
});
