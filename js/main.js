/*global
alert, confirm, console, Debug, opera, prompt, WSH, myHeading
*/
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var name = "Jan Nowak";
console.log(name);

document.querySelector('a').onclick = function () {
    alert('Czy jesteś pewien?');
}