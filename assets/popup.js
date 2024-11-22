const popup = document.getElementById("popup");
const form = document.getElementById("popupForm");
const emailInput = document.getElementById("emailInput");
const btnNoThank = document.querySelector(".title-last");
// thiết lập cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// đọc cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  // Chỉ hiển thị popup nếu cookie "popupDismissed" chưa được thiết lập
  if (!getCookie("popupDismissed")) {
    setTimeout(() => {
      popup.classList.add("active");
    }, 0);
  }

  // Xử lý sự kiện submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value;

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    if (validateEmail(email)) {
      setCookie("popupDismissed", "true", 7); // Đặt cookie tồn tại 7 ngày
      popup.classList.remove("active");
      alert("Thank you for subscribing!");
    } else {
      alert("Please enter a valid email address.");
    }
  });

  btnNoThank.addEventListener("click", () => {
    setCookie("popupDismissed", "true", 7);
    popup.classList.remove("active");
  });
});
