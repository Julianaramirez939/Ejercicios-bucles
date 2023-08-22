let causa = prompt("Ingresa por favor si se trata de una pérdida o una devolución: ");
let retrasoRevista = 500;
let retrasoLibro = 600;
let perdidaMulta = 10000;
let devolucion = "devolucion";
let perdida = "perdida";

if (causa === devolucion) {
  let cantidadDias = parseInt(prompt("Ingresa el número de días de retraso: "));
  let revista = parseInt(prompt("Ingresa el número de revistas prestadas: "));
  let libro = parseInt(prompt("Ingresa la cantidad de libros prestados: "));
  let multa1 = revista * retrasoRevista;
  let multa2 = libro * retrasoLibro;
  let multaTotal = multa1 + multa2;
  console.log(`El total a pagar de la multa es: ${multaTotal}`);
} else if (causa === perdida) {
  let ejemplar = parseInt(prompt("Ingresa la cantidad de ejemplares perdidos: "));
  let multaTotal2 = ejemplar * perdidaMulta;
  console.log(`El total a pagar por pérdida es: ${multaTotal2}`);
} else {
  console.log("Error, debe ingresar alguna de las dos causas.");
}
