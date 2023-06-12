const menu = document.querySelector(".navigation")
const burger = document.querySelector(".burger");
burger.addEventListener("click",()=>{
menu.classList.toggle("active")
burger.classList.toggle("active")
});

