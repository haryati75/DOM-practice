// PLACE YOUR CODE HERE
document.querySelector("#btn-Book").addEventListener('click', function() {
    let myTicket = extractFormInfo();
    let totalPrice = 0;

    if (myTicket.class=="first-class") {
        totalPrice += 1200;
    } else if (myTicket.class=="business-class") {
        totalPrice += 750;
    } else if (myTicket.class=="economy") {
        totalPrice += 250;
    } else {
        console.log("Error pricing in class.");
    }

    let liOptions = "";
    if (myTicket.options.length > 0) {
        totalPrice += 10 * myTicket.options.length;
        for (let o of myTicket.options) {
            liOptions += o + ", ";
        }
    }
        
    let summaryElement = document.querySelector('#summary');
    summaryElement.innerHTML = `
        <h3>Booking Summary for ${myTicket.fname} ${myTicket.lname}</h3>
        <div>
            <ul>
                <li>Ticket Class: ${myTicket.class}</li>
                <li>Options: ${liOptions}</li>
            </ul>
        </div>
        <h3>Total Price: \$${totalPrice.toFixed(2)}</h3>
    `;

})

