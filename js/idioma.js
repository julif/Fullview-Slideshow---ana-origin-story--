//variables de idioma
var idioma= "ingles"; //idioma predeterminado
var idiomanavegador= navigator.language;

//si no hay un idioma preseleccionado no pasa nada.
if (localStorage.NombreWebappIdiomaSeleccionado == undefined){ detectarIdioma();};
//si  hay un idioma preseleccionado idoma pasa a ser el idioma preseleccionado.
if (localStorage.NombreWebappIdiomaSeleccionado != undefined){ idioma=localStorage.NombreWebappIdiomaSeleccionado}

console.log(" idiomanavegador "+ idiomanavegador );
console.log(" idioma "+ idioma );


function detectarIdioma(){
	filtrarespañol(); //español
} 


/* --- español --- */
function filtrarespañol(){
	//español-españa
	if (idiomanavegador == "es" || idiomanavegador == "es-ES" ) { idioma="español";};
	//español-latinoamerica
	if (idiomanavegador == "es-419" || idiomanavegador == "es-LA"|| idiomanavegador == "es-XL") { idioma="español";};

	if (idiomanavegador == "es-AR") { idioma="español";};
	if (idiomanavegador == "es-MX") { idioma="español";};
    if (idiomanavegador == "es-US") { idioma="español";};
    if ( idiomanavegador == "es-VE") { idioma="español";};
    if ( idiomanavegador == "es-UY") { idioma="español";};
    if ( idiomanavegador == "es-CO") { idioma="español";};
    if ( idiomanavegador == "es-CL") { idioma="español";};
    if (idiomanavegador == "es-BR") { idioma="español";};
    if (idiomanavegador == "es-BO") { idioma="español";};
    if (idiomanavegador == "es-PA") { idioma="español";};
    if (idiomanavegador == "es-PE") { idioma="español";};
} 