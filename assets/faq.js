const questions = document.querySelectorAll(".questions__items");

questions.forEach((question) => {
  const title = question.querySelector(".questions__title");
  const answer = question.querySelector(".questions__answer");
  const iconPlus = question.querySelector(".icon-plus");
  const iconMins = question.querySelector(".icon-mins");

  title.addEventListener("click", () => {
    // kiểm tra trạng thái
    const isActive = answer.classList.contains("show");

    // đóng tất cả các tab
    questions.forEach((item) => {
      item.querySelector(".questions__answer").classList.remove("show");
      item.querySelector(".icon-plus").classList.remove("hide");
      item.querySelector(".icon-mins").classList.add("hide");
      item.querySelector(".questions__title").classList.remove("style");
    });

    // nếu tab hiên tại ko hoạt động sẽ mở
    if (!isActive) {
      answer.classList.add("show");
      iconPlus.classList.add("hide");
      iconMins.classList.remove("hide");
      title.classList.add("style");
    }
  });
});
