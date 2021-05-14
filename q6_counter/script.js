let box = document.querySelector("#box");

document.querySelector("#increment").addEventListener('click', function() {
    let val = parseInt(box.innerHTML);
    if (val<10) {
        val++;
        box.innerHTML = val;
        changeBoxColor(box, val);
    }
})

document.querySelector("#decrement").addEventListener('click', function() {
    let val = parseInt(box.innerHTML);
    if (val>0) {
        val--;
        box.innerHTML = val; 
        changeBoxColor(box, val);
    }
})

document.querySelector("#reset").addEventListener('click', function() {
    let val = parseInt(box.innerHTML);
    val=0;
    box.innerHTML = val;
    changeBoxColor(box, val);
})

function changeBoxColor(b, val) {
    if (val%2==0) {
        b.style.backgroundColor = "green";
    } else {
        b.style.backgroundColor = "red";
    }
}