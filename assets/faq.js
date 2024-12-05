document.querySelectorAll(".questions__title").forEach((title) => {
  title.addEventListener("click", () => {
    const answer = title.nextElementSibling;
    // đóng câu tl khác
    document.querySelectorAll(".questions__answer").forEach((otherAnswer) => {
      if (otherAnswer !== answer) {
        otherAnswer.classList.remove("show");
        otherAnswer.style.maxHeight = 0;
      }
    });

    answer.classList.toggle("show");
    // điều chỉnh chiều cao
    if (answer.classList.contains("show")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }

    const icon = title.querySelector(".icon-act i");
    if (answer.classList.contains("show")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      title.classList.add("show");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
      title.classList.remove("show");
    }

    document.querySelectorAll(".questions__title").forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("show");
        const otherIcon = otherTitle.querySelector(".icon-act i");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
