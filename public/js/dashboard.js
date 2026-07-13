// import fetchPopularPateerns from ravelryAPI.js

// Welcome Header
const storedUser = localStorage.getItem('profile');

if(storedUser) {
    const user = JSON.parse(storedUser);

    userName = user.firstname;

    document.getElementById("welcome-header").textContent = `Welcome ${userName}`;
} else {

    document.getElementById("welcome-header").textContent = "Welcome Guest";

}

// Current Projects
function loadProject(project){
    localStorage.setItem("currentProjectId", project.id);
    window.location.href= "projects.html";

}

function deleteProject(projectId){
    const savedProjects = JSON.parse(localStorage.getItem("savedPatternProjects"));
    const updatedProjects = savedProjects.filter(project => project.id !== projectId);
    localStorage.setItem("savedPatternProjects", JSON.stringify(updatedProjects));
    renderProjects();
}

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
                loadProject(project);
            });

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "X";

            deleteButton.addEventListener('click', (event) =>{
                const confirmDelete = confirm("Are you sure you would like to remove this project entry?");
                if (confirmDelete) {
                    deleteProject(project.id);
                }
            });

            projectRow.append(projectLink);
            projectRow.append(deleteButton);

            projectContainer.append(projectRow);
        });
    } 
}
renderProjects();

// Ravelry Patterns
// Create an async function displayPopularPatterns()
    // Create the container by grabbing the element by id
    // Fetch the data by const patterns as an await fetchPopularPatterns()
    // Filter out Top Patterns
    // Clear container innerhtml
    // If statement for if the top patterns equal 0 - unable to load patterns
    // Use a For Each statement to create pattern card divs that will include the pattern image(smallest size), pattern name, and author name using textContent (NOT innerhtml for safety)
    // Append the card to the container
    // Run the function