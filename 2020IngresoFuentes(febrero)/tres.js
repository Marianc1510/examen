function mostrar()
{
	//En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
//a) El nombre del hombre casado más joven.
//b) El sexo y nombre del pasajero/a más viejo.
//c) La cantidad de mujeres que hay casadas o viudas.
//d) El promedio de edad entre las mujeres.
//e) El promedio de edad entre los hombres solteros.

	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var respuesta = true;
	var bandera=true
	var edadMinima;
	var edadMaxima;
	var nombreMinimo;
	var nombreMaximo;
	var sexoMaximo;
	var cantidadCasadas;
	var cantidadViudas;
	var promedioEdadMujeres;
	var promedioEdadhombres;
	var cantidadMujeres=0
	var cantidadHombresSolteros=0

	 while(respuesta){

		do{
		nombre=prompt("ingrese su nombre");
		}while(nombre=="" || nombre==null);

		do{
		edad=prompt("ingrese su edad");
		edad=parseInt(edad);
		}while(isNaN(edad)|| edad<18 || edad>99);
		
		do{
			sexo=prompt("ingrese su sexo f o m");
		}while(sexo==""|| sexo==null || sexo.toLocaleLowerCase()!="f" || sexo.toLocaleLowerCase()!="m");

		do{
			estadoCivil=prompt("ingrese su estado civil, soltero, casado, viudo");
		}while(!isNaN(estadoCivil)&& estadoCivil!="soltero" && estadoCivil !="casado" && estadoCivil!="viudo");

		if(bandera){
		 edadMaxima=edad;
		 edadMinima=edad;
		 nombreMinimo=nombre;
		 nombreMaximo=nombre;
		 sexoMaximo=sexo;
		 bandera=false
		}
		else if (sexo=="m" && estadoCivil=="casado" && edad<edadMinima){
			edadMaxima=edad;
			nombreMinimo=nombre;	
		}
		else if( edad>edadMaxima ){
			edadMaxima=edad;
			sexoMaximo=sexo;
			nombreMaximo=nombre;
		}
		switch(sexo=="f"){
			case estadoCivil=="soltera":
				cantidadCasadas++;
				break;
			case estadoCivil=="viuda":
				cantidadViudas++;
				break;
		}
		if(sexo=="f"&& sexo>0){
			cantidadMujeres++;
		}	
	respuesta=confirm("Desea seguir continuando");
	 }

	 if(cantidadMujeres>0){
		 //promedioEdadMujeres=
	 }
}
