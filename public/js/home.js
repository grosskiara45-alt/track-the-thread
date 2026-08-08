// Make sure users have a profile before accessing rest of site
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

// Make sure users only make one profile instead of multiple
const startButton = document.getElementById("get-started");

startButton.addEventListener('click', (event) => {
    event.preventDefault()
    if (startButton){
        const userProfile = localStorage.getItem('profile');

        if (!userProfile) {
            window.location.href = `profile.html`;
        } else {
            window.location.href = `dashboard.html`;
        }
    }
});

//Desktop slideshow
let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("header-slide");
    for( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}