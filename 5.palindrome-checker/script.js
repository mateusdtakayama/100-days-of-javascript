const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  const word = document.querySelector(".input-text").value;

  if (word === "") {
    result.innerText = "Please enter a word";
  } else if (
    word.toLowerCase() === word.split("").reverse().join("").toLowerCase()
  ) {
    result.innerText = `${word} is a palindrome`;
  } else {
    result.innerText = `${word} is not a palindrome`;
  }
});
