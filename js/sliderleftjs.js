let rows = document.querySelectorAll(".row");
let leftBtn = document.querySelector(".btn-left");
let container = document.querySelector(".slider_left")
let rowIndex = 0;
let maxIndex = rows.length - 1;

console.log(rows);
leftBtn.addEventListener("click", () => {

    if (rowIndex === maxIndex) {
        rowIndex = 0;
    } else {
      rowIndex++;
    }

    container.style.transform = `translate3d(${(70 * (z))}px, 0px, 0px)`;
    // rows.forEach((row, index) => {
    //   row.style.transform = `translateX(${10 * (index - rowIndex)}%)`
    // })
  })