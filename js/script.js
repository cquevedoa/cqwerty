// alert("AVISO: Devido a la situación actual el servicio técnico a domicilio está suspendido.")
  
      

            // BARRA SUPERIOR
            let header = `<div class="container top-bar">

            
            <a  class="top-bar-element covid-alert" href="./blog/coronavirus.html">
              <i class="fa fa-virus"> </i> Cuarentena en AMBA </a>
        
         
              <div class="top-bar-element social-links"> 
              <a  class="margin-5" href="https://api.whatsapp.com/send/?phone=5491157395741&text=WCli+-+Hola+tengo+una+consulta"><i class="fab fa-whatsapp"> </i> 11 5739 5741</a>   
              <a class="margin-5" href="https://facebook.com/cqwerty.ar"> <i class="fab fa-facebook-square"></i></a>
              <a  class="margin-5" href="https://instagram.com/cqwerty.ar"> <i class="fab fa-instagram"></i></a> 
              
              </div>
          
        </div>`

        document.getElementById("top-bar").innerHTML=header

        // LOGO 
        let logo = `<a href="/"><img src="./img/cqwerty-logo.svg" alt="Servicio Técnico de Computadoras">
        <h1 hidden>Servicio Técnico CQWERTY</h1></a>`

        document.getElementById("logo").innerHTML=logo

            
          //FOOTER
          let footer =`<div class="container mt-5  flex-center padding-10 flex-between footer-column">
          <p class="copy"> <a href="/codoacodo"> <i class="fa fa-laptop-code"></i>
            Carlos Quevedo</a></p>
    
            <p class="nav-menu">
              <a class="margin-5" href="https://facebook.com/cqwerty.info"> <i class="fab fa-facebook-square"></i> </a> 
              <a class="margin-5" href="https://instagram.com/cqwerty.info"> <i class="fab fa-instagram"> </i> </a>
              <a class="margin-5" href="https://api.whatsapp.com/send/?phone=5491157395741&text=WCli+-+Hola+tengo+una+consulta"><i class="fab fa-whatsapp"> </i> </a>
              <a class="margin-5" href="tel:+5491157395741"><i class="fa fa-mobile-alt"> </i> 11 5739 5741 </a></p>
              </div>`

          document.getElementById("footer").innerHTML=footer


            let servicios =  ` <div class="col service-item margin-5"> `
            
            for (let i = 0; i < i.length; i++) { 
            servicios = servicios + `
            <button class="service-title btn btn-block"  onclick="servicio()"><i class="fab "${iconos[i]}"></i>  ${servicio[i]}</button>  
            <p class="service-text ocultar-serv">${descripciones[i]}</p>
    `
  }
  servicios = servicios + `</div>`

  document.getElementById("idservicios").innerHTML=servicios

        



