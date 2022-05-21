let rows = document.querySelectorAll(".row");
let leftBtn = document.querySelector(".btn-left");

let rowIndex = 0;
let maxIndex = rows.length - 1;

console.log(rows);
leftBtn.addEventListener("click", () => {

    if (rowIndex === 0) {
        rowIndex = maxIndex;
    } else {
      rowIndex--;
    }

    rows.forEach((row, index) => {
      row.style.transform = `translateX(${10 * (index - rowIndex)}%)`
    })
  })