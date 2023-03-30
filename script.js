const entrada = document.getElementById("valor");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const resultado = document.querySelector(".resultado");

let array = [];

const boobleSort = () => {
  console.log(array);
};

const insertionSort = () => {
  console.log(array);
};

const selectSort = () => {
  console.log(array);
};

const checkdButton = array => {
  btn1.removeAttribute("disabled");
  btn2.removeAttribute("disabled");
  btn3.removeAttribute("disabled");
  if (array.length > 5 && array.length <= 10) {
    btn1.setAttribute("disabled", "");
  } else if (array.length > 10 && array.length <= 15) {
    btn1.setAttribute("disabled", "");
    btn2.setAttribute("disabled", "");
  }
};

const chnageValores = () => {
  const valor = entrada.value;
  resultado.innerText = valor;
  array = valor.split(" ").map(Number);
  checkdButton(array);
};

entrada.addEventListener("change", chnageValores);

btn1.addEventListener("click", boobleSort);
btn2.addEventListener("click", insertionSort);
btn3.addEventListener("click", selectSort);
