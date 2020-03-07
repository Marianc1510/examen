
function mostrar()
{
	var productos=0
	var tipo;
	var precios;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var precioBarbijoMasCaro;
	var precioBarbijoMasCaroFabricante;
	var precioBarbijoMascaroCantidad;
	var bandera=0
	var cantidadBarbijo=0
	var cantidadAlcohol=0
	var cantidadJabon=0
	var unidadesMaximo;
	var fabricanteMaximo;
	var cantidadUnidadesJabon=0
	

	while(productos<5)
	{
		do{
			tipo=prompt(" ingrese tipo de productos barbijo, jabon, alcohol");
		}while(!isNaN(productos)&& tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol");

		do{
			precio=prompt("ingrese su precio");
			precio=parseInt(precio);			
		}while(isNaN(precio)|| precio<100 || precio>300);

		do{
			cantidadUnidades=prompt("ingrese la cantidad de unidades");
			cantidadUnidades=parseInt(cantidadUnidades);
		}while (isNaN(cantidadUnidades)|| cantidadUnidades<1 || cantidadUnidades>1000);

		do{
			marca=prompt("indique su marca");
		}while(!isNaN(marca));

		do{
			fabricante=prompt("ingrese su fabricante");
		}while(!isNaN(fabricante));
		
		if(tipo=="barbijo" && bandera==0|| precioBarbijoMasCaro<precio){
			precioBarbijoMasCaro=precio;
			precioBarbijoMasCaroFabricante=fabricante;
			precioBarbijoMascaroCantidad=cantidadUnidades;
			bandera++;
		}
		switch(tipo){
			case "barbijo":
				cantidadBarbijo++;
				break;
			case "alcohol":
				cantidadAlcohol++;
				break;
			case "jabon":
				cantidadJabon++;
				break;
		}
		if (cantidadBarbijo> cantidadAlcohol && cantidadBarbijo >cantidadJabon){
			unidadesMaximo=cantidadBarbijo;
			fabricanteMaximo=fabricante;
		}
		else if( cantidadAlcohol> cantidadJabon){
			unidadesMaximo=cantidadAlcohol;
			fabricanteMaximo=fabricante;
		}
		else{
			unidadesMaximo=cantidadJabon;
			fabricanteMaximo=fabricante;
		}
		if(tipo=="jabon"){
			cantidadUnidadesJabon+=cantidadUnidades;
		}
		productos++;
		
	}
	document.write(" del mas caro de los barbijos" + precioBarbijoMasCaro + "la cantidad" + precioBarbijoMascaroCantidad + " su fabricante" + precioBarbijoMasCaroFabricante + "</br>");
	document.write(" del item con mas unidades" + unidadesMaximo + "fabricante" + fabricanteMaximo + "<br>");
	document.write("unidades de jabones totales" + cantidadJabon+ "<br>");
	
}
