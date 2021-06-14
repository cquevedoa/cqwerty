function menu() {
            
    let  btnMenu = document.getElementsByClassName("nav-enlace");
    for (let i = 0; i < btnMenu.length; i++) {
        btnMenu[i].classList.toggle('ocultar-menu');
        
    }
}

function servicio() {
    
    let  btnServ = document.getElementsByClassName("service-text");
    for (let i = 0; i < btnServ.length;i++) {
        btnServ[i].classList.toggle('ocultar-serv')
        
    }
}