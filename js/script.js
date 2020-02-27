const btn = document.querySelector(".btn__binary");
const label = document.querySelector(".label__decimal");

btn.addEventListener("click", () => {
  clear();
  const value = document.querySelector(".input__binary").value;
  binaryDecimal(value);
});

function binaryDecimal(value) {
  let decimal = parseInt(value, 2);
  const text2 = document.createTextNode(decimal);
  label.appendChild(text2);
}

function clear() {
  label.innerHTML = "";
}

function isBinary(evt) {
  var ch = String.fromCharCode(evt.which);
  if (!/[0-1]/.test(ch)) {
    evt.preventDefault();
  }
}
