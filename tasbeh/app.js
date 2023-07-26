document.querySelector('#click').addEventListener('click', function () {
    let ekran = document.querySelector('#ekran');
    ekran.value = Number(ekran.value) + 1;
});

document.querySelector('#delete').addEventListener('click', function () {
    let ekran = document.querySelector('#ekran');
    ekran.value = 0;
});

let led = document.querySelector('#light');
const back = () => {
    let bgc = document.querySelector('#ekran');
    bgc.classList.toggle('back');
};

led.onclick = back;



// let duo = document.querySelector('#h11');
// let mydate = document.querySelector('#ekran');
// let button = document.querySelector('#click');
// let span = document.querySelector('');
// let count = 0;
// let all = 0;

// button.onclick = function () {
//     count += 1;
//     mydate.value = count;

//     if (count === 33) {
//         duo.textContent = 'Subhanalloh';
//     } else if (count === 66) {
//         duo.textContent = 'Alhamdulillah';
//     } else if (count === 99) {
//         count = 0;
//         duo.textContent = 'Allohu Akbar';
//         all += 1;
//         span.textContent = all;
//         mydate.value = count;
//     }
// };


// let root = document.querySelector(`#tekst`)
let sub = "Subhanalloh"
let al = "Alhamdulillah"
let all = "Allohu Albat"
let none = 0
let h2 = document.querySelector(`#tekst`)
let la = "la ilaha illallah muhammadur rasulullah"
let ektran = document.querySelector(`#ekran`)

document.querySelector('#click').addEventListener('click', function () {
    let ekran = document.querySelector('#ekran');
    ekran.value = Number(ekran.value) + 1;
    
    if (ekran.value <= 33) {
        h2.innerHTML = "Subhanalloh";
    } else if (ekran.value <= 66) {
        h2.innerHTML = "Alhamdulillah";
    } else if (ekran.value <= 99) {
        h2.innerHTML = "Allohu Akbar";
        ekran.value = 0;
    }
});