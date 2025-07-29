const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const email = document.querySelector("#email");
const JobApplication = document.querySelector("#JobApplication");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const pincode = document.querySelector("#pincode");
const date = document.querySelector("#date");
const cv = document.querySelector("#cv1");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("form");


submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const name1Value = name1.value.trim();
    const name2Value = name2.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const pincodeValue = pincode.value.trim();

    // Simple regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
    // Pincode: 6 digits
    const pincodePattern = /^\d{6}$/;


    if (!name1Value || !name2Value || !emailValue || !addressValue || !cityValue || !pincodeValue || !date.value || !cv.value) {
        alert("Please fill in all fields.");
        return;
    }
    if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!pincodePattern.test(pincodeValue)) {
        alert("Please enter a valid 6-digit pincode.");
        return;
    }

    if(!namePattern.test(name1Value) || !namePattern.test(name2Value)) {
        alert("Please enter valid names (letters and spaces only).");
    }
    // You can add more checks for other fields if needed

    alert("Form submitted successfully!");
    // Here you can add code to send the form data to a server or process it further
    name1.value = "";
    name2.value = "";
    email.value = "";
    address.value = "";
    city.value = "";
    pincode.value = "";
    date.value = "";
    cv.value = "";
    JobApplication.value = "";
});

console.log(form)
