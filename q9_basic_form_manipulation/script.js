
function getFormValues() {

    let email = document.querySelector("#email-address").value;

    let models = document.querySelectorAll(".phone-type");
    let model = null;
    for (let m of models) {
        if (m.checked) {
            model = m.value;
            break;
        }
    }

    let servicesAll = document.querySelectorAll(".services");
    let services = [];
    for (let s of servicesAll) {
        if (s.checked) {
            services.push(s.value)
        }
    }

    let pickup = document.querySelector("#pick-up").value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
