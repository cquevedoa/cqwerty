const navMenu = document.querySelector(".nav-menu")
const openMenu = document.querySelector(".nav-btn_open")
const closeMenu = document.querySelector(".nav-btn_close")

function toggleMenu() {
    navMenu.classList.toggle("nav-menu_visible");
  }
  
  openMenu.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);


// navBtn.addEventListener("click", () => {
//     navMenu.classList.toggle("nav-menu_visible")


//     if (navMenu.classList.contains("nav-menu_visible")) {
//         navBtn.setAttribute("arialabel", "Cerrar menú")
//     } else {
//         navToggle.setAttribute("aria-label", "Abrir menú")
//     }
// })