

  let slides = document.querySelectorAll(".slide");
  let nextBtn = document.querySelector(".btn-right");
  let backBtn = document.querySelector(".btn-left");
  let box = document.querySelectorAll(".box");

  let slideIndex = 0;
  let maxIndex = slides.length - 1;
  window.onload = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${60 * (index)}px)`;
    nextBtn.style.opacity="50%";
  })
}
  nextBtn.addEventListener("click", () => {

    if (slideIndex === 0) {
      nextBtn.style.opacity="50%";
    } else {
      slideIndex--;
      backBtn.style.opacity="100%";
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${60 * (index - slideIndex)}px)`;
    })
  })

  backBtn.addEventListener("click", () => {

    if (slideIndex === maxIndex) {
      backBtn.style.opacity="50%";
    } else {
      slideIndex++;
      nextBtn.style.opacity="100%";
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${60 * (index - slideIndex)}px)`
    })
  })

  slides.forEach((slide, index) => {
    slide.addEventListener("mouseover", () => {
      box[index].style.display = "flex";
      slide.style.setProperty("--display", "flex");
      slide.style.border="2px solid #354A9F";
    });
    slide.addEventListener("mouseout", () => {
      box[index].style.display = "none";
      slide.style.setProperty("--display", "none");
      slide.style.border="2px solid #C4C4C4";
    })
  })

