window.addEventListener("load", randomNumber);

let ranNum;

function randomNumber() {
  ranNum = Math.floor(Math.random() * 101);
  console.log(ranNum);
  document.querySelector("#number").textContent = ranNum;
}
