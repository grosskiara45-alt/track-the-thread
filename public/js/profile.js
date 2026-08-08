const profileForm = document.getElementById("profile-form");

// Submit profile form event listener
profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(validateProfileForm()) {
        console.log("Profile Form submitted successfully!")
        const profileData = {
            firstname: document.getElementById("fname").value.trim(),
            lastname: document.getElementById("lname").value.trim(),
            id: Math.random().toString(36).substring(2, 9)
        }
        localStorage.setItem('profile', JSON.stringify(profileData));

        console.log("Profile Data saved to local storage", profileData);

        window.location.href="dashboard.html"
    } else {
        console.log("Form validation failed. View errors.")
    }
});

// Reset profile form event listener
profileForm.addEventListener('reset', () => {
    resetProfileErrors();
});

// Validate profile form
function validateProfileForm() {
    const fName = document.getElementById("fname").value.trim();
    const lName = document.getElementById("lname").value.trim();

    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");

    fnameError.textContent = "";
    lnameError.textContent = "";

    let isValid = true;

    if (fName === ""){
        fnameError.textContent = "Please enter your first name";
        isValid = false;
    }

    if (lName === ""){
        lnameError.textContent = "Please enter your last name";
        isValid = false;
    }

    return isValid;
}

// Reset profile form errors
function resetProfileErrors() {
    document.getElementById("fnameError").textContent = "";
    document.getElementById("lnameError").textContent = "";

}