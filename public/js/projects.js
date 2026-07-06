const projectForm = document.getElementById("project-form");

projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(validateForm()){
        console.log("Project Entry submitted successfullly!")
        const projectTitle = document.getElementById("project-title").value.trim();
        const currentDate = document.getElementById("current-date").value;
        const craftElement = document.querySelector('input[name="craft"]:checked');
        const selectedCraft = craftElement ? craftElement.value : "";
        const fiberType  = document.getElementById("fiber-type").value.trim();
        const yarnWeight  = document.getElementById("yarn-weight").value.trim();
        const needleSize  = document.getElementById("needle-size").value.trim();
        const projectFit  = document.getElementById("project-fit").value.trim();
        const rowTracker  = document.getElementById("row-tracker").value.trim();
        const projectNotes  = document.getElementById("project-notes").value.trim();


        const projectData = {
            projectTitle: projectTitle,
            currentDate: currentDate,
            craftType: selectedCraft,
            fiberType: fiberType,
            yarnWeight: yarnWeight,
            needleSize: needleSize,
            projectFit: projectFit,
            rowTracker: rowTracker,
            projectNotes: projectNotes
        }

        const savedProjects = JSON.parse(localStorage.getItem("savedPatternProjects")) || [];

        savedProjects.push(projectData);

        localStorage.setItem("savedPatternProjects", JSON.stringify(savedProjects));

        console.log("Project Entry saved to local storage", savedProjects);

        renderProjects();
    } else {
        console.log("Project Entry Form Validation failed. View errors")
    }
});

projectForm.addEventListener('reset', () => {
    resetErrors();
});

function validateForm() {
    const projectTitle = document.getElementById("project-title").value.trim();
    const currentDate = document.getElementById("current-date").value;
    const craftElement = document.querySelector('input[name="craft"]:checked');
    const selectedCraft = craftElement ? craftElement.value : "";
    const validCraft = ['knitting', 'crochet', 'machine-knitting', 'loom-knitting'];
    const fiberType  = document.getElementById("fiber-type").value.trim();
    const yarnWeight  = document.getElementById("yarn-weight").value.trim();
    const needleSize  = document.getElementById("needle-size").value.trim();
    const projectFit  = document.getElementById("project-fit").value.trim();
    const rowTracker  = document.getElementById("row-tracker").value.trim();
    const projectNotes  = document.getElementById("row-tracker").value.trim();

    const projectTitleError = document.getElementById("project-title-error");
    const currentDateError = document.getElementById("current-date-error");
    const craftError = document.getElementById("craft-error");
    const fiberTypeError = document.getElementById("fiber-type-error");
    const yarnWeightError = document.getElementById("yarn-weight-error");
    const needleSizeError = document.getElementById("needle-size-error");
    const projectFitError = document.getElementById("project-fit-error");
    const rowTrackerError = document.getElementById("row-tracker-error");
    const projectNotesError = document.getElementById("project-notes-error");

    projectTitleError.textContent = "";
    currentDateError.textContent = "";
    craftError.textContent = "";
    fiberTypeError.textContent = "";
    yarnWeightError.textContent = "";
    needleSizeError.textContent = "";
    projectFitError.textContent = "";
    rowTrackerError.textContent = "";
    projectNotesError.textContent = "";

    let isValid = true;

    if (projectTitle === ""){
        projectTitleError.textContent = "Please enter a title for your project!";
        isValid = false;
    } 

    if (currentDate === "" || !currentDate.Date(currentDate)) {
        currentDateError.textContent = "Please enter valid date for your project!";
        isValid = false;
    } 

    if (selectedCraft) {
        if (selectedCraft.value !== validCraft) {
            craftError.textContent = "Please select valid option!"
            isValid = false;
        }
    }

    if (fiberType) {
        if (fiberType.length > 20){
            fiberTypeError.textContent = "Fiber type cannot exceed 20 characters";
            isValid = false;
        }
    }

    if (yarnWeight) {
        if (yarnWeight.length > 20){
            yarnWeightError.textContent = "Yarn weight cannot exceed 20 characters";
            isValid = false;
        }
    }

    if (needleSize) {
        if (!Number(needleSize)) {
            needleSizeError.textContent = "Please enter a valid number"
            isValid = false;
        }
    }

    if (projectFit) {
        if (projectFit.length > 20){
            projectFitError.textContent = "Project fit cannot exceed 20 characters";
            isValid = false;
        }
    }

    if (rowTracker) {
        if (!Number(rowTracker)) {
            rowTrackerError.textContent = "Please enter a valid number"
            isValid = false;
        }
    }

    if (projectNotes) {
        if (projectNotes.length > 250){
            projectNotesError.textContent = "Project notes cannot exceed 250 characters";
            isValid = false;
        }
    }

   return isValid;
}

function renderProjects() {   
   
}

function resetErrors() {

}
