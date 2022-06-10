

let slides = document.querySelectorAll(".slide");
let nextBtn = document.querySelector(".btn-right");
let backBtn = document.querySelector(".btn-left_hover");
let boxs = document.querySelectorAll(".box");
let sliders = document.querySelector(".slider")

let slideIndex = 0;
let maxIndex = slides.length - 1;
let z = 0;
let counter_box = 0;


const contentbox = (counter_box) =>{
  
  // slides.forEach((slide, index) => {
    // if (slide.style.transform === `translateX(0px)`) {
      boxs[counter_box].style.display = "flex";
      slides[counter_box].style.setProperty("--display", "flex");
      slides[counter_box].style.border = "1px solid #354A9F";
    // }
    // else {
    //   // boxs[index].style.display = "none";
    //   slide.style.setProperty("--display", "none");
    //   slide.style.border = "1px solid #C4C4C4";
    // }
  // })
}

const contentboxnone = () =>{
  slides.forEach((slide, index) => {
    
      boxs[index].style.display = "none";
      slide.style.setProperty("--display", "none");
      slide.style.border = "1px solid #C4C4C4";
      
  })
}


sliders.style.transform = `translate3d(0px, 0px, 0px)`;
nextBtn.style.opacity = "50%";
contentbox(counter_box);


  // slides.forEach((slide, index) => {
  //   slide.style.transform = `translateX(${90 * (index)}px)`;
  //   nextBtn.style.opacity = "50%";
  //   
  // })



nextBtn.addEventListener("click", () => {

  if (slideIndex === 0) {
    nextBtn.style.opacity = "50%";
  } else {
    slideIndex--;
    backBtn.style.opacity = "100%";
  }

  // slides.forEach((slide, index) => {
  //   slide.style.transform = `translateX(${(90 * (index - slideIndex)) + 90}%)`;
  //   contentbox();
  // })
  
  if( counter_box > 0 ){
    z++;
  sliders.style.transform = `translate3d(${(120 * (z))}px, 0px, 0px)`;
  
  contentboxnone();
  counter_box--;
  contentbox(counter_box);
}
})

backBtn.addEventListener("click", () => {

  if (slideIndex === maxIndex - 5) {
    backBtn.style.opacity = "50%";
  } else {
    slideIndex++;
    nextBtn.style.opacity = "100%";
  }
  console.log(slideIndex);
  // slides.forEach((slide, index) => {
  //   slide.style.transform = `translateX(${(90 * (index - slideIndex)) + 90}%)`;
  //   contentbox();
  // })
  
  if(counter_box <= maxIndex - 5 ){
    z--;
  sliders.style.transform = `translate3d(${(120 * (z))}px, 0px, 0px)`;

  contentboxnone();
  counter_box++;
  contentbox(counter_box);
}
})





slides.forEach((slide, index) => {
  slide.addEventListener("mouseover", () => {
    contentboxnone();
    boxs[index].style.display = "flex";
    slide.style.setProperty("--display", "flex");
    slide.style.border = "1px solid #354A9F";
  });
  slide.addEventListener("mouseout", () => {
    
    boxs[index].style.display = "none";
    slide.style.setProperty("--display", "none");
    slide.style.border = "1px solid #C4C4C4";
    contentbox(counter_box);
  })
})