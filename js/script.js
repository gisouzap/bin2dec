const btn = document.querySelector(".btn__binary");
const output = document.querySelector(".output__decimal");

btn.addEventListener("click", () => {
  const value = document.querySelector(".input__binary").value;
  binaryDecimal(value);
  clear();
});

function binaryDecimal(value) {
  let decimal = parseInt(value, 2);
  output.value = decimal;
}

function clear() {
  output.innerHTML = "";
  //to clear input binary
  //document.querySelector(".input__binary").value = "";
}

function isBinary(evt) {
  var ch = String.fromCharCode(evt.which);
  if (!/[0-1]/.test(ch)) {
    evt.preventDefault();
    window.alert("Enter 0 or 1.");
  }
}
