

function pintarNumero(numero) {
   // document.getElementById('data').value=numero
   pintarDatos(numero)//para que el numero no se borre
}

function pintarOperador(operador) {
   pintarDatos(` ${operador} `)
}

function pintarDatos(dato) {
   let valorInput = document.getElementById("data")
   //valorInput.value=valorInput.value +" "+ dato //espacio entre cada dato
   valorInput.value = `${valorInput.value}${dato}`//espacio entre cada dato
}

function limpiar() {
   document.getElementById("data").value = ' '

}

function mostrarResultado() {
   let valorInput = document.getElementById('data').value
   let arreglo = valorInput.split(' ')
   console.log(arreglo)

   /*split: coge una cadena de texto y lo corta por un valor que yo quiera 
y se convierte en un arreglo*/

   if (arreglo[1] == "+") {
      let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
      console.log(suma)
      document.getElementById("data").value = suma
   } else if (arreglo[1] == "-") {
      let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
      document.getElementById("data").value = resta
   } else if (arreglo[1] == "*") {
      let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
      document.getElementById("data").value = multiplicar
   } else {
      let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
      document.getElementById("data").value = dividir
   }


  /* switch (arreglo[1]) {
      case '+':
         let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
         document.getElementById('data').value = suma
         break;

      case '-':
         let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
         document.getElementById('data').value = resta
         break;

      default:
         alert('no es + ni -')
   }*/
}

function queDiaEsHoy() {
   let dia1 = prompt("¿Que dia es hoy");

   switch (dia1) {
      case 'lunes':
         alert("Buen dia, hoy es lunes")
         break;


      case 'martes':
         alert("Buen dia, hoy es martes")
         break;

      case 'miercoles':
         alert("Buen dia, hoy es miercoles")
         break;

      case 'jueves':
         alert("Buen dia, hoy es jueves")
         break;

      case 'viernes':
         alert("Buen dia, hoy es viernes")
         break;

      case 'sabado':
         alert("Buen dia, hoy es sabado")
         break;

      case 'domingo':
         alert("Buen dia, hoy es domingo")
         break;

      default:
         alert('no corresponde a los dias de la semana')
   }
}
