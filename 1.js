var numers = 0;
var txt = document.getElementById("text");
var btn = document.getElementById("btn");
var text = document.querySelector("input");

function add(){
    var char = text.value;
    for (var i = 0; i < char.length; i++) {
        if (char[i] >= 0) {
            if (char[i] <= 9) {
                numbers++;
            }
        }
    }
    console.log(numers);
    txt.textContent = numers;
    text.value = "";
    numers = 0;
}