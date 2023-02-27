const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const subtract = document.querySelector(".subtract");
const count = document.querySelector(".count");

add.addEventListener("click", () => {
  count.innerHTML++;
  SetColor();
});

subtract.addEventListener("click", () => {
  count.innerHTML--;
  SetColor();
});

reset.addEventListener("click", () => {
  count.innerHTML = 0;
  SetColor();
});

function SetColor() {
    if (count.innerHTML > 0){
        count.style.color = "green";
    }
    else if (count.innerHTML < 0 ) {
        count.style.color = "red";
    } else {
        count.style.color = "white"
    }
}