// PLACE YOUR CODE HERE

document.querySelector("button").addEventListener('click', function() {
    let boxes = document.querySelectorAll(".box");
    let total = 0;
    for (let b of boxes) {
        val = getRandomIntInclusive(1,6);
        b.innerHTML = val;
        total += val;
    }
    document.querySelector("#result").innerHTML = total;
})

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
    //The maximum is inclusive and the minimum is inclusive
  }
