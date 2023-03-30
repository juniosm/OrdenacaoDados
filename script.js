const entrada = document.getElementById("valor");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const resultado = document.querySelector(".resultado");

let array = [];

const bubbleSort = () => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  resultado.innerText = array;
};

const selectionSort = () => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let aux;
    for (let j = i + 1; j <= array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i != min) {
      aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  resultado.innerText = array;
};

const insertionSort = () => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  resultado.innerText = array;
};

const checkdButton = array => {
  btn1.removeAttribute("disabled");
  btn2.removeAttribute("disabled");
  btn3.removeAttribute("disabled");
  if (array.length > 20 && array.length <= 50) {
    btn1.setAttribute("disabled", "");
  } else if (array.length > 50 && array.length <= 100) {
    btn1.setAttribute("disabled", "");
    btn2.setAttribute("disabled", "");
  }
};

const chnageValores = () => {
  const valor = entrada.value;
  array = valor.split(" ").map(Number);
  checkdButton(array);
};

entrada.addEventListener("change", chnageValores);

btn1.addEventListener("click", bubbleSort);
btn2.addEventListener("click", selectionSort);
btn3.addEventListener("click", insertionSort);
