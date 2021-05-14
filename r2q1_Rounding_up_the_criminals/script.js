// PLACE YOUR CODE HERE
let arrestedAll = document.querySelectorAll(".a:not(.undercover)");
for (let a of arrestedAll) {
    a.style.backgroundColor = "red";
    a.innerText = a.innerText + "(jailed)";
}

let undercoverArrestedAll = document.querySelectorAll("div.undercover.a");
for (let u of undercoverArrestedAll) {
    u.style.backgroundColor = "yellow";
}
