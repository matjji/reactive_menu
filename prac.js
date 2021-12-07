const barsBtn =document.querySelector(".barsBtn");
const menu = document.querySelector(".menu");
const icons = document.querySelector(".sns");

function handleclick(event){
    menu.classList.toggle("active");
    icons.classList.toggle("active");
}

barsBtn.addEventListener("click", handleclick)