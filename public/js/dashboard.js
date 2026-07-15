// import fetchPopularPatterns from ravelryAPI.js

// Change header on page to Welcome user's name
const storedUser = localStorage.getItem('profile');

if(storedUser) {
    const user = JSON.parse(storedUser);

    const userName = user.firstname;

    document.getElementById("welcome-header").textContent = `Welcome ${userName}`;
} else {

    document.getElementById("welcome-header").textContent = "Welcome Guest";

}

// Load saved projects from projects page so users can access projects quickly
function loadProjectForm(project){
    localStorage.setItem("currentProjectId", project.id);
    window.location.href= "projects.html";

}
// Delete projects from dashboard page
function deleteProjectForm(projectId){
    const savedProjects = JSON.parse(localStorage.getItem("savedPatternProjects"));
    const updatedProjects = savedProjects.filter(project => project.id !== projectId);
    localStorage.setItem("savedPatternProjects", JSON.stringify(updatedProjects));
    renderProjects();
}

// Render saved projects so that the saved data is on the projects page for user's access
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
            });

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "X";

            deleteButton.addEventListener('click', (event) =>{
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

// Ravelry Patterns
const ravelryPatterns = document.getElementById("ravelry-patterns");

document.addEventListener("DOMContentLoaded", async() => {
    try {
        const response = await fetch("http://localhost:3000/api/patterns/search.json", {
            targetAddressSpace: "loopback"
        });
        const json = await response.json();
        const apiData = json.data || {};

        const patterns = apiData.patterns || [];

        ravelryPatterns.innerHTML = "";
        patterns.forEach(pattern => {
            const patternName = document.createElement("h3");
            patternName.className = "pattern-name";
            patternName.textContent = `${pattern.name} by ${pattern.pattern_author.name}`;
            ravelryPatterns.appendChild(patternName);

            const patternPhoto = document.createElement("img");
            patternPhoto.className = "pattern-photo";
            patternPhoto.src = `${pattern.first_photo.medium_url}`;
            patternPhoto.alt = `${pattern.name}`;
            ravelryPatterns.appendChild(patternPhoto);

            const patternLink = document.createElement("a");
            patternLink.className = "pattern-link";
            patternLink.href = `https://www.ravelry.com/patterns/library/${pattern.permalink}`;
            patternLink.textContent = `"https://www.ravelry.com/patterns/library/"${pattern.permalink}`;
            patternLink.target = "_blank";
            ravelryPatterns.appendChild(patternLink);

        })
 
    } catch (error) {
        console.error("Error loading patterns", error.message);
        ravelryPatterns.textContent = "Failed to load patterns";
    }
});