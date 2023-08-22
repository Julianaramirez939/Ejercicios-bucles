let saldo = 1000;

let opcion = 1; 

let mensaje = opcion === 1
  ? "Opción 1: Retiro\n"
  : opcion === 2
  ? "Opción 2: Consignación\n"
  : opcion === 3
  ? "Opción 3: Consultar saldo\n"
  : "Opción inválida. Por favor, elija:\n1. Retiro\n2. Consignación\n3. Consultar saldo";

console.log(mensaje);

opcion === 1
  ? (montoRetiro = 500, montoRetiro > 0 && montoRetiro <= saldo
      ? (saldo -= montoRetiro, console.log(`Retiro exitoso. Saldo restante: $${saldo}`))
      : console.log("Monto de retiro inválido o saldo insuficiente."))
  : opcion === 2
  ? (montoConsignacion = 200, montoConsignacion > 0
      ? (saldo += montoConsignacion, console.log(`Consignación exitosa. Saldo actual: $${saldo}`))
      : console.log("Monto de consignación inválido."))
  : opcion === 3
  ? console.log(`Su saldo actual es: $${saldo}`)
  : console.log("Opción inválida.");
