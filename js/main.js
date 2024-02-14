function pedirProducto() {
  const lista = ["A:  valor = $270", "B:  valor = $340", "C:  valor = $390"];
  var bandera = true;
  let valorProducto = 0;
  let plantilla = "";
  let producto = "";

  while (bandera) {
    for (producto of lista) {
      plantilla += `\n${producto}\n`;
    }

    const p = prompt(`Escribe la letra del producto que deseas: ${plantilla}`);
    const opcion = p.toUpperCase();
    if (opcion == "A") {
      valorProducto = 270;
      bandera = false;
    } else if (opcion == "B") {
      valorProducto = 340;
      bandera = false;
    } else if (opcion == "C") {
      valorProducto = 390;
      bandera = false;
    } else {
      alert("El producto seleccionado no existe");
      plantilla = "";
      bandera = true;
    }
    // console.log("-----------------------------");
  }
  return valorProducto;
}

function pedirPlata(valorProducto) {
  // console.log(");
  let sumaMonedas = 0;

  while (sumaMonedas < valorProducto) {
    const moneda = Number(
      prompt(
        `Solo puedes ingresar monedas de: \n $10 \n $50 \n $100\n Ingresa una moneda: `
      )
    );
    if (moneda == 10 || moneda == 50 || moneda == 100) {
      sumaMonedas += moneda;
    } else {
      alert("Moneda invalida");
      moneda = 0;
    }
  }
  return sumaMonedas;
}

let valorProducto = pedirProducto();

let diferencia = pedirPlata(valorProducto) - valorProducto;

if (diferencia != 0) {
  // console.log("Su vuelto:");
} else {
  console.log("A paz y salvo");
  alert("A paz y salvo");
}

let vueltos = 0;
let mostrarVueltos = "";

while (diferencia != 0) {
  if (diferencia >= 100) {
    vueltos = diferencia - 100;
    mostrarVueltos += `100\n`;
  } else if (diferencia >= 50 && diferencia < 100) {
    vueltos = diferencia - 50;
    mostrarVueltos += `50\n`;
  } else if (diferencia < 50) {
    vueltos = diferencia - 10;
    mostrarVueltos += `10\n`;
  }
  diferencia = vueltos;
}

alert(`Tus vueltos: \n${mostrarVueltos}\n`);
