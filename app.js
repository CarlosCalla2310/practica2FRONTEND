// app.js
let operacionActual = '';
let operando1 = null;
let operando2 = null;
let operacionPendiente = null;

function limpiar() {
  document.getElementById('display').value = '';
  operacionActual = '';
  operando1 = null;
  operando2 = null;
  operacionPendiente = null;
}

function borrar() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
  operacionActual = display.value;
}

function agregarNumero(numero) {
  operacionActual += numero;
  document.getElementById('display').value = operacionActual;
}

function agregarPunto() {
  if (!operacionActual.includes('.')) {
    operacionActual += '.';
    document.getElementById('display').value = operacionActual;
  }
}

function realizarOperacion(op) {
  if (operando1 === null) {
    operando1 = parseFloat(operacionActual);
    operacionActual = '';
    document.getElementById('display').value = '';
    operacionPendiente = op;
  } else if (operacionPendiente !== null) {
    operando2 = parseFloat(operacionActual);
    operando1 = calcularOperacion();
    operando2 = null;
    operacionPendiente = op;
    operacionActual = '';
    document.getElementById('display').value = '';
  } else {
    operando1 = parseFloat(operacionActual);
    operacionActual = '';
    document.getElementById('display').value = '';
    operacionPendiente = op;
  }
}

function calcular() {
  if (operando1 !== null && operacionPendiente !== null) {
    operando2 = parseFloat(operacionActual);
    const resultado = calcularOperacion();
    document.getElementById('display').value = resultado;
    operando1 = resultado;
    operacionActual = '';
    operacionPendiente = null;
    operando2 = null;
  }
}

function calcularOperacion() {
  switch (operacionPendiente) {
    case '+':
      return operando1 + operando2;
    case '-':
      return operando1 - operando2;
    case '*':
      return operando1 * operando2;
    case '/':
      if (operando2 !== 0) {
        return operando1 / operando2;
      } else {
        alert('No se puede dividir por cero');
        limpiar();
        return NaN;
      }
    case '%':
      return operando1 % operando2;
    default:
      return NaN;
  }
}
