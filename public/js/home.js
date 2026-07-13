const returnButton = document.getElementById("return-profile");

returnButton.addEventListener('click', (event) => {
    event.preventDefault()
    if (returnButton){
        const userProfile = localStorage.getItem('profile');

        if (userProfile) {
            window.location.href = `dashboard.html`;
        } else {
            alert("Please create a profile before continuing to dashboard!");
            window.location.href = `profile.html`;
        }
    }
});