document.getElementsByClassName("randbtn")[0].onclick = function () {
  randomize();

}

function randomize() {
  let randnum = document.getElementsByClassName("randnum");
  let num;
  for (let i = 0; i < randnum.length; i++) {
    num = Math.floor(Math.random() * (10 - 0));
    randnum[i].value = num;
  }
}