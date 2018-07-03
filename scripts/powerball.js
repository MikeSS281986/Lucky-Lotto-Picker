document.getElementsByClassName("randbtn")[0].onclick = function () {
  randomize();

}

function randomize() {
  let randnum = document.getElementsByClassName("randnum");
  let num;
  for (let i = 0; i < randnum.length - 1; i++) {
    num = Math.floor(Math.random() * (70 - 1));
    randnum[i].value = num;
  }
  num = Math.floor(Math.random() * (27 - 1));
    randnum[5].value = num;
}