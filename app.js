let tbtn = document.querySelector("#tbtn");
let inputvalue = document.querySelector("#input-area").value;

tbtn.addEventListener("click",display);

function display() {
    console.log("Button clicked!");
    let inputvalue = document.querySelector("#input-area").value;
    console.log(inputvalue);
    document.querySelector("#output-area").innerText = inputvalue;
}