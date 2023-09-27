const numbers = [];

/* opgave 1 */

let text = "";

for (let i = 1; i < 11; i++) {
  text += i + "<br>";
}

document.getElementById("opgave1").innerHTML = text;
console.groupEnd();
console.group("opgave 1");

/* opgave 2 */

let text2 = "";

for (let i = 10; i >= 1; i--) {
    console.log(i);
    text2 += i + "<br>";
}

document.getElementById("opgave2").innerHTML = text2; 
console.groupEnd();
console.group("opgave 2");




/* opgave 3 */

let text3 = "";

for (let i = 2; i <= 40; i++) {
    console.log(i);
    text3 += i + "<br>";
}

document.getElementById("opgave3").innerHTML = text3;







