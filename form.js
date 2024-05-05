document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting initially

        // Get form elements
        const name = document.getElementById("name").value.trim();
        const dob = document.getElementById("date").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const address = document.getElementById("Address").value.trim();
        const email = document.getElementById("email").value.trim();
        const no = document.getElementById("no").value.trim();
        const dept = document.getElementById("dept").value;
        const disability = document.querySelectorAll('input[name="dis"]:checked');
        const marksheet = document.getElementById("marksheet").value.trim();
        const img = document.getElementById("img").value.trim();

        // Validation checks
        if (name === "" || dob === "" || !gender || address === "" || email === "" || no === "" || dept === "" || disability.length === 0 || marksheet === "" || img === "") {
            alert("Please fill in all the required fields");
            return;
        }

        // If all validations pass, submit the form
        alert("Form submitted successfully!");
        form.reset(); // Optional: Reset the form after submission
        window.location.href = "success.html"; // Redirect to success page
    });
});
