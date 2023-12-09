console.clear();

document.querySelector("#click").addEventListener("click", updateCounter);

document.querySelector("#delete").addEventListener("click", function () {
  let ekran = document.querySelector("#ekran");
  ekran.value = 0;
  h2.innerHTML = "";
});

let led = document.querySelector("#light");
const back = () => {
  let bgc = document.querySelector("#ekran");
  bgc.classList.toggle("back");
};
led.onclick = back;

let sub = "Subhanalloh";
let alh = "Alhamdulillah";
let all = "Allahu Akbar";
let h2 = document.querySelector(`#tekst`);
let ekran = document.querySelector(`#ekran`);

document.querySelector("#click").addEventListener("click", updateCounter);

function updateCounter() {
  let ekran = document.querySelector("#ekran");
  ekran.value = Number(ekran.value) + 1;

  if (ekran.value <= 11) {
    h2.innerHTML = sub;
  } else if (ekran.value <= 22) {
    h2.innerHTML = alh;
  } else if (ekran.value <= 33) {
    h2.innerHTML = all;
  } else {
    ekran.value = 0;
    h2.innerHTML = "";
  }
}
