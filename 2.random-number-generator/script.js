const number = document.querySelector(".number")
const generate = document.querySelector(".generate")


const generateNumber = () => {
  // Generates number between 1-100

  const randomNumber = Math.floor(Math.random() * 100)
  number.innerHTML = randomNumber
}

generate.addEventListener("click", generateNumber)

generateNumber()