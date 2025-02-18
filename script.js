let count = 0
let btn = document.getElementById("btn")
let number = document.getElementById("number")

btn.addEventListener("click", () =>
{
    count++
    number.innerHTML = count;
})