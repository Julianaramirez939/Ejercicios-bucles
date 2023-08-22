let votosAnaMaria = 0;
let votosDiego = 0;

for (let x = 0; x < 10; x++) {
  let opcion = parseInt(prompt("Elige una opción de voto:\n1. Ana Maria Suarez\n2. Diego Acero"));
  
  if (opcion === 1) {
    votosAnaMaria++;
  } else if (opcion === 2) {
    votosDiego++;
  } else {
    console.log("Opción no válida.");
  }
}

if (votosAnaMaria > votosDiego) {
  console.log("El ganador es Ana Maria Suarez.");
} else if (votosDiego > votosAnaMaria) {
  console.log("El ganador es Diego Acero.");
} else {
  console.log("La votación terminó en empate.");
}

console.log(`Resultados:\nAna Maria Suarez: ${votosAnaMaria} votos\nDiego Acero: ${votosDiego} votos`);
