const copyTxt = document.querySelector("textarea[name=copyTxt]");

const finalTxt = document.querySelector("button[name=finalTxt]");

const moverBtn = document.querySelector(".moverBtn");

const copyBtn = document.querySelector(".copyBtn");

const output = document.querySelector(".output");

moverBtn.addEventListener("click", moveText);
copyBtn.addEventListener("click", copyText);

function moveText() {
  let temp = copyTxt.value;
  finalTxt.value = temp;
}
function copyText() {
  let temp = copyTxt.value;
  copytoClipBoard(temp);
  console.log("merhaba");
}

function copyToClipBoard(str) {
  const textarea = document.createElement("textarea");
  textarea.value = str;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  output.innerHTML = "<h3>Copided Content</h3>" + textarea.value;
  console.log(textarea);
}
