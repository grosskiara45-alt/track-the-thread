// Validate User Input, Save User Input to Local Storage, and Direct to DashBoard Page
const profileForm = document.getElementById("profile-form");

profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(validateForm()) {
        console.log("Profile Form submitted successfully!")
        const profileData = {
            firstname: document.getElementById("fname").value.trim(),
            lastname: document.getElementById("lname").value.trim(),
            theme:document.querySelector('input[name="theme"]:checked')?.value || 'light'
        }
        localStorage.setItem('profile', JSON.stringify(profileData));

        console.log("Profile Data saved to local storage", profileData);

        window.location.href="dashboard.html"
    } else {
        console.log("Form validation failed. View errors.")
    }
});


profileForm.addEventListener('reset', () => {
    resetErrors();
});

function validateForm () {
    const fName = document.getElementById("fname").value.trim();
    const lName = document.getElementById("lname").value.trim();
    const selectedTheme = document.querySelector('input[name="theme"]:checked');

    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");
    const themeError = document.getElementById("themeError");

    fnameError.textContent = "";
    lnameError.textContent = "";
    themeError.textContent = "";

    let isValid = true;

    if (fName === ""){
        fnameError.textContent = "Please enter your first name";
        isValid = false;
    }

    if (lName === ""){
        lnameError.textContent = "Please enter your last name";
        isValid = false;
    }

    if (selectedTheme === null){
        themeError.textContent = "Please select your visual preferences";
        isValid = false;
    }

    return isValid;
}

function resetErrors() {
    document.getElementById("fnameError").textContent = "";
    document.getElementById("lnameError").textContent = "";
    document.getElementById("themeError").textContent = "";
}