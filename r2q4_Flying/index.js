function extractFormInfo()
{
  let firstName = document.querySelector("#fname").value;
  
  let lastName = document.querySelector("#lname").value;
  
  let ticketClasses = document.querySelectorAll(".ticket-class");
  let ticketClass = null;
  for (let tc of ticketClasses) {
    if (tc.checked) {
      ticketClass = tc.value;
      break;
    }
  }
  
  let options = []
  let optionsAll = document.querySelectorAll(".options");
  for (let o of optionsAll) {
    if (o.checked) {
      options.push(o.value);
    }
  }

  let flightTicket = {
    "fname": firstName,
    "lname": lastName,
    "class": ticketClass,
    "options": options
  }
  return flightTicket;
}