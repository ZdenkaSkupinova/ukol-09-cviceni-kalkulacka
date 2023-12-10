

const handleDigitClick = (e) => {
    const display = document.querySelector(".display")
    if (display.textContent.length >= 9) {
      return
    }

    const digit = e.target.textContent

    if (display.textContent === "0") {
      display.textContent = digit
    } else {
        display.textContent += digit
      }
  }
  
  document.querySelector("#btn-0").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-1").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-2").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-3").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-4").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-5").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-7").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-8").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-9").addEventListener("click", handleDigitClick)