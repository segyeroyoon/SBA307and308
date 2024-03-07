// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
    alert("Form submitted!");
}

document.addEventListener('DOMContentLoaded', function() {

    var submitButton = document.querySelector('form button[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', submitForm);
    }
});