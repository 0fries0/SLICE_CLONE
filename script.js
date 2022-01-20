window.onload = function(){
    
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener('click', ()=>{
    sidebar.classList.add("active");
})
close.addEventListener('click', ()=> {
    sidebar.classList.remove("active");
})
}