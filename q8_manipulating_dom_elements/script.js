// PLACE YOUR CODE HERE
let emphasisAll = document.querySelectorAll(".emphasis");
for (let e of emphasisAll) {
    e.style.fontFamily = "Verdana";
}

let finishedAll = document.querySelectorAll("li.finished");
for (let f of finishedAll) {
    f.style.textDecoration = "line-through";
}

let todoAll = document.querySelectorAll("ul#low-priority > li.todo");
for (let t of todoAll) {
    t.style.backgroundColor = "blue";
}

let alertAll = document.querySelectorAll(".alert");
for (let a of alertAll) {
    a.style.color = "red";
}
