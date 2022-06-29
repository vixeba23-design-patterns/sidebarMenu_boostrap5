var menu_btn = document.querySelector("#menu-btn")
var sidebar = document.querySelector("#sidebar")
var container = document.querySelector(".my-container ")
menu_btn.addEventListener("click", ()=> {
  sidebar.classList.toggle("active-nav")
  menu_btn.classList.toggle("change")
  container.classList.toggle("active-cont")
})
