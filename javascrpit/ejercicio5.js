let tamaño = prompt("Ingresa por favor el tamaño del sticker (Pequeño, Grande):");
let precioPequeño = 4000;
let precioGrande = 6000;
let cantidad;

if (tamaño === "pequeño" || tamaño === "grande") {
  while (true) {
    cantidad = parseFloat(prompt("Ingresa la cantidad de stickers:"));
    
    if (cantidad >= 10) {
      break;
    } else {
      console.log("La cantidad debe ser mayor o igual a 10. Por favor, intenta de nuevo.");
    }
  }

  let costoTotal;
  if (tamaño === "pequeño") {
    costoTotal = cantidad * precioPequeño;
  } else {
    costoTotal = cantidad * precioGrande;
  }

  console.log(`El costo total es: ${costoTotal}`);
} else {
  console.log("Tamaño no válido");
}
