let saldo = 5; 

const producto1 = { nombre: "Producto A", precio: 1.5 };
const producto2 = { nombre: "Producto B", precio: 2.0 };

let seleccion = 2; 

if (seleccion === 1 || seleccion === 2) {
  let productoElegido = seleccion === 1 ? producto1 : producto2;

  if (saldo >= productoElegido.precio) {
    saldo -= productoElegido.precio;
    console.log(`Usted ha comprado ${productoElegido.nombre}. Saldo restante: $${saldo}`);
    
    saldo > 0 ? console.log(`Se le devuelve el cambio de $${saldo}`) : null;
  } else {
    console.log(`Saldo insuficiente. El producto cuesta $${productoElegido.precio}.`);
  }
} else {
  console.log("Selección inválida. Por favor, elija 1 para Producto A o 2 para Producto B.");
}