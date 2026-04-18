import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.onload = function () {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let valWho = generateRandom(who);
  let valAction = generateRandom(action);
  let valwhat = generateRandom(what);
  let valwhen = generateRandom(when);
  document.querySelector("#excuse").innerHTML = valWho + ' ' + valAction + ' ' + valwhat + ' ' + valwhen;

};


