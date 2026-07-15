const projectForm = document.getElementById("project-form");

// Submit Project form event listener
projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(validateProjectForm()){
        console.log("Project Entry submitted successfullly!");
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

        const savedProjects = JSON.parse(localStorage.getItem("savedPatternProjects")) || [];

        const projectData = {
            projectTitle: projectTitle,
            currentDate: currentDate,
            craftType: selectedCraft,
            fiberType: fiberType,
            yarnWeight: yarnWeight,
            needleSize: needleSize,
            projectFit: projectFit,
            rowTracker: rowTracker,
            projectNotes: projectNotes,
            id: `${projectTitle}-${Date.now()}`
        };

        savedProjects.push(projectData);

        localStorage.setItem("savedPatternProjects", JSON.stringify(savedProjects));

        console.log("Project Entry saved to local storage", savedProjects);

        renderProjects();
    } else {
        console.log("Project Entry Form Validation failed. View errors");
    }
});


// Reset Project form event listener
projectForm.addEventListener('reset', () => {
    resetProjectErrors();
});

// Validate Project form
function validateProjectForm() {
    const projectTitle = document.getElementById("project-title").value.trim();
    const currentDate = document.getElementById("current-date").value;
    const craftElement = document.querySelector(`input[name="craft"]:checked`);
    const selectedCraft = craftElement ? craftElement.value : "";
    const validCraft = ['knitting', 'crochet', 'machine-knitting', 'loom-knitting'];
    const fiberType  = document.getElementById("fiber-type").value.trim();
    const yarnWeight  = document.getElementById("yarn-weight").value.trim();
    const needleSize  = document.getElementById("needle-size").value.trim();
    const projectFit  = document.getElementById("project-fit").value.trim();
    const rowTracker  = document.getElementById("row-tracker").value.trim();
    const projectNotes  = document.getElementById("project-notes").value.trim();

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

    if (currentDate === "") {
        currentDateError.textContent = "Please enter valid date for your project!";
        isValid = false;
    } 

    if (selectedCraft) {
        if (!validCraft.includes(selectedCraft)) {
            craftError.textContent = "Please select valid option!";
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
        if (isNaN(needleSize)) {
            needleSizeError.textContent = "Please enter a valid number";
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
        if (isNaN(rowTracker)) {
            rowTrackerError.textContent = "Please enter a valid number";
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

// Load Project form once user saves a project
function loadProjectForm(project){
    document.getElementById("project-title").value = project.projectTitle || "";
    document.getElementById("current-date").value = project.currentDate || "";
    document.getElementById("fiber-type").value = project.fiberType || "";
    document.getElementById("yarn-weight").value = project.yarnWeight || "";
    document.getElementById("needle-size").value = project.needleSize || "";
    document.getElementById("project-fit").value = project.projectFit || "";
    document.getElementById("row-tracker").value = project.rowTracker || "";
    document.getElementById("project-notes").value = project.projectNotes || "";

    if(project.craftType) {
        const radioToSelect = document.querySelector(`input[name="craft"]:checked`);
        if (radioToSelect) {
            radioToSelect.checked = true;
        }
        console.log (`Details successfully loaded for ${project.projectTitle}`);
    }

}

// Remove a project form from local storage if users clicks delete button
function deleteProjectForm(projectId){
    const savedProjects = JSON.parse(localStorage.getItem("savedPatternProjects"));
    const updatedProjects = savedProjects.filter(project => project.id !== projectId);
    localStorage.setItem("savedPatternProjects", JSON.stringify(updatedProjects));
    renderProjects();
}

// Render saved Project form if user clicks on saved project link
function renderProjects() {   
    const savedProjects = JSON.parse(localStorage.getItem("savedPatternProjects"));
    const projectContainer = document.getElementById("project-links-container");
    
    projectContainer.innerHTML = "";

    if (savedProjects && savedProjects.length > 0) {
        savedProjects.forEach(project => {
            const projectRow = document.createElement("div");
            projectRow.className = "project-row";

            const projectLink = document.createElement("a");
            projectLink.className = "project-link";
            projectLink.href ="#";
            projectLink.textContent = `${project.projectTitle} ${project.currentDate}`;

            projectLink.addEventListener('click',(event) =>{
                event.preventDefault();
                loadProjectForm(project);
                projectHeader(project.projectTitle);
            });

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "X";

            deleteButton.addEventListener('click', (event) => {
                const confirmDelete = confirm("Are you sure you would like to remove this project entry?");
                if (confirmDelete) {
                    deleteProjectForm(project.id);
                }
            });

            projectRow.append(projectLink);
            projectRow.append(deleteButton);

            projectContainer.append(projectRow);
        });
    } 
}
renderProjects();

// Change header on page to match project title
function projectHeader(title) {
    const savedProjects = JSON.parse(localStorage.getItem("savedPatternProjects"));
    const projectHeaderContainer = document.getElementById("project-header");
    projectHeaderContainer.textContent = "";

    const projectHeaderTitle = document.createElement("h1");
    projectHeaderTitle.className = "project-header";

    if(title) {
        projectHeaderTitle.textContent = title;
    } else {
        projectHeaderTitle.textContent = 'New Project';
    }
    projectHeaderContainer.append(projectHeaderTitle);
}

// Reset Project form errors
function resetProjectErrors() {
    document.getElementById("project-title-error").textContent = "";
    document.getElementById("current-date-error").textContent = "";
    document.getElementById("craft-error").textContent = "";
    document.getElementById("fiber-type-error").textContent = "";
    document.getElementById("yarn-weight-error").textContent = "";
    document.getElementById("needle-size-error").textContent = "";
    document.getElementById("project-fit-error").textContent = "";
    document.getElementById("row-tracker-error").textContent = "";
    document.getElementById("project-notes-error").textContent = "";
}

function callbackProjectForm(){
    const currentId = localStorage.getItem("currentProjectId");

    if (currentId) {
        const savedProjects = JSON.parse(localStorage.getItem("savedPatternProjects"));
        const project = savedProjects.find(project => project.id === currentId);

        if (project){
            if(document.getElementById("project-title")) document.getElementById("project-title").value = project.projectTitle || "";
            if(document.getElementById("current-date")) document.getElementById("current-date").value = project.currentDate || "";
            if(document.getElementById("fiber-type")) document.getElementById("fiber-type").value = project.fiberType || "";
            if(document.getElementById("yarn-weight")) document.getElementById("yarn-weight").value = project.yarnWeight || "";
            if(document.getElementById("needle-size")) document.getElementById("needle-size").value = project.needleSize || "";
            if(document.getElementById("project-fit")) document.getElementById("project-fit").value = project.projectFit || "";
            if(document.getElementById("row-tracker")) document.getElementById("row-tracker").value = project.rowTracker || "";
            if(document.getElementById("project-notes")) document.getElementById("project-notes").value = project.projectNotes || "";
            
            if (project.craftType) {
                const radioToSelect = document.querySelector(`input[name="craft"][value="${project.craftType}"]`);
                if (radioToSelect) {
                    radioToSelect.checked = true;
                }
            }    
        }
        localStorage.removeItem("currentProjectId");
        projectHeader(project.projectTitle);
    }
}
const currentId = localStorage.getItem("currentProjectId");
if (currentId) {
    callbackProjectForm();
} else {
    projectHeader();
}
