// Calcular el producto de 3 números
function producto(){
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	let num3 = parseFloat(document.getElementById("num3").value);
	document.getElementById("resp").value = num1 * num2 * num3;
};

// Leer temperatuda
function temperatura(){
	let temp = parseFloat(document.getElementById("temp").value);
	if(temp > -11 && temp < 16){
		document.getElementById("resp_temp").value = "Frio";
	} else if (temp > 15 && temp < 26){
		document.getElementById("resp_temp").value = "Templado";
	} else if (temp > 25 && temp < 40){
		document.getElementById("resp_temp").value = "Calor";
	} else{
		document.getElementById("resp_temp").value = "No valido";
	}
}

// Factorial de un número
function factorial(){
	let fact = document.getElementById("fact").value;
	let resp_fact = 1;
	for(let i = 1; i<= fact; i++){
		resp_fact = resp_fact * i;
	}
	document.getElementById("resp_fact").value = resp_fact;
}

// Mostrar fecha actual
function mostrarFecha(){
	let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	let hoy;
    let dia; 
	let mes; 
	let anio;
	let fecha = new Date();
	hoy = fecha.getDay();
	dia = fecha.getDate();
	mes = fecha.getMonth();
	anio = fecha.getFullYear();
	document.getElementById("fecha").innerHTML = dias[hoy] + ", " + dia + " de " + meses[mes] + " del " + anio;
}