const counterEL = document.getElementById("counter")
const incrementEL = document.getElementById("increment")
const decrementEL = document.getElementById("decrement")
let count = 0
incrementEL.addEventListener("click", () => {
  count++;
  counterEL.innerText = count
})
decrementEL.addEventListener("click", () => {
  count--;
  counterEL.innerText = count
})
const counter2EL = document.getElementById("counter2")
const increment2EL = document.getElementById("increment2")
const decrement2EL = document.getElementById("decrement2")
let count2 = 0
increment2EL.addEventListener("click", () => {
  count2++;
  counter2EL.innerText = count2
})
decrement2EL.addEventListener("click", () => {
  count2--;
  counter2EL.innerText = count2
})
