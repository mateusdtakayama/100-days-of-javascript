const count = document.querySelector('.count')
const generator = document.querySelector('.generate')


const GenerateColor = () => {
   const color = Math.random().toString(16).substring(2, 8)
   document.body.style.backgroundColor = "#" + color
   count.innerHTML = "#" + color
}

generator.addEventListener("click", GenerateColor)