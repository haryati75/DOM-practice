// PLACE YOUR CODE HERE
let divAccount = document.querySelector("#account");
let divWallet = document.querySelector("#other-wallet");

document.querySelector("#topUp10").addEventListener('click', function() {
    divAccount.innerHTML += 10;
})

document.querySelector("#transfer10ToWallet").addEventListener('click', function() {
    if (divAccount.innerHTML > 0) {
        divWallet.innerHTML += 10;
        divAccount.innerHTML -= 10;
    }
})

document.querySelector("#transfer10ToAccount").addEventListener('click', function() {
    if (divWallet.innerHTML > 0) {
        divAccount.innerHTML += 10;
        divWallet.innerHTML -= 10;
    }
})

document.querySelector("#spend").addEventListener('click', function() {
    if (divWallet.innerHTML > 0) {
        let amountSpend = document.querySelector("#amount").value;
        divWallet.innerHTML -= amountSpend;
    }
})
