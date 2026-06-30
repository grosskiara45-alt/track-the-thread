// Validate User Input
const projectForm = document.getElementById("project-form");
    // Add event listener to submit button
projectForm.addEventListener('submit', (event) => {
        // If the form is valid:
            // Console log that the Project form was submitted successfully
            // Save to Local Storage with the key value being the project-title
                // Add Event listener for save button
                // Get values
                // Create data object
                // Save to local storage
                // Run Display Data Function
                // Clear the form inputs

        // Else:
            // Console log that the Project was not sucessfully saved
            // Alert message that the project was not successfully saved
});
    // Add event listener to reset button
projectForm.addEventListener('reset', () => {
    resetErrors();
});
    // Create function for validateForm
function validateForm(){
    const projectTitle = document.getElementById("project-title").value.trim();
    const currentDate = document.getElementById("current-date").value;
    const craftElement = document.querySelector('input[name="craft"]:checked');
    const selectedCraft = craftElement ? craftElement.value : "";
    const patternFileInput = document.querySelector('input[name="pattern-file"]');
    const patternFile = patternFileInput.length > 0 ? patternFileInput[0] : null;
    const patternLink = document.getElementById("pattern-link").value.trim()
    const fiberElement = document.getElementById("fiber-type");
    const selectedFiber = Array.from(fiberElement.selectedOptions).map(option => option.value);
    const yarnWeightElement = document.getElementById("yarn-weight");
    const selectedYarnWeight = Array.from(yarnWeightElement.selectedOptions).map(option => option.value);
    const needleSize = document.getElementById("needle-size").value.trim()
    const projectFit = document.getElementById("project-fit").value.trim()
    const rowTracker = document.getElementById("row-tracker").value.trim()
    const projectNotes = document.getElementById("project-notes").value.trim()
    const projectImage = document.querySelector('input[name="project-image"]').files;

    const projectTitleError = document.getElementById();
    const currentDateError = document.getElementById();
    const craftError = document.getElementById();
    const patternFileError = document.getElementById();
    const patternLinkError = document.getElementById();
    const fiberError = document.getElementById();
    const yarnWeightError = document.getElementById();
    const needleSizeError = document.getElementById();
    const projectFitError = document.getElementById();
    const rowTrackerError = document.getElementById();
    const projectNotesError = document.getElementById();
    const projectImageError = document.getElementById();
    
    projectTitleError.textContent = "";
    currentDateError.textContent = "";
    craftError.textContent = "";
    patternFileError.textContent = "";
    patternLinkError.textContent = "";
    fiberError.textContent = "";
    yarnWeightError.textContent = "";
    needleSizeError.textContent = "";
    projectFitError.textContent = "";
    rowTrackerError.textContent = "";
    projectNotesError.textContent = "";
    projectImageError.textContent = "";

    let isValid = true;

    if (projectTitle === ""){
        projectTitleError.textContent = "Please enter a title for your project";
        isValid = false;
    }

    if (currentDate === ""){
        currentDateError.textContent = "Please enter today's date"
        isValid = false;
    }
    // OPTIONAL Craft Type radio button: check that they selected an allowed value
    // OPTION Upload Pattern File: check if it is the right file type
    // OPTIONAL URL Link: check if the link is valued
    // OPTIONAL Fiber Type: check that they selected an allowed value
    // OPTIONAL Yarn Weight: check that they selected an allowed value
    // OPTIONAL Needle Size: check that they didn't enter text letters, negative numbers, or trailing decimal
    // OPTIONAL Project Fit: check that the characters are not more than 20
    // OPTIONAL Row Tracker: check that they didn't enter any text
    
};
    // Create function for resetErrors
function resetErrors(){
    // Get input elements established above and make the text content ""
}


// Saved Projects
    // Grab DOM elements
    // Function to Display Data
        // Retrieve the saved data from local storage
        // Check that the data is there
            // Parse the string back into an object
            // Inject the data into the project links container

// Run on Page load so that the data stays on the screen