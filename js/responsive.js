var plataform;
responsive();

function responsive(){
  if ( window.innerWidth < 580 ) { plataform="smartphone portrait"; }
  if ( window.innerWidth < 580 && window.innerHeight < window.innerWidth) { plataform="smartphone landsape"; }
  if ( window.innerWidth > 580 && window.innerWidth < 1024 ) { plataform="tablet"; }
  if ( window.innerWidth > 1024 ) { plataform="desktop"; }


  //avoidportrait();  (opcional)



  if (plataform == "desktop" ) { plataform = "desktop"}
  if (plataform == "smartphone landsape" || plataform == "smartphone portrait" || plataform == "tablet") { plataform = "mobile"}

  console.log(" plataforma : "+ plataform);

  
};