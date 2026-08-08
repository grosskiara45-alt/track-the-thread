// Change header on page to Welcome user's name
const storedUser = localStorage.getItem("profile");

if (storedUser) {
  const user = JSON.parse(storedUser);

  const userName = user.firstname;

  document.getElementById("welcome-header").textContent =
    `Welcome ${userName}!`;
} else {
  document.getElementById("welcome-header").textContent = "Welcome Guest!";
}

const goalsForm = document.getElementById("goals-form");

// Goals form event listener
goalsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateGoalsForm()) {
    console.log("Goals Entry submitted successfully!");
    const user = JSON.parse(storedUser);

    const userGoals = `${user.firstname}-goals`;
    
    const goalsData = {
      goalOne: document.getElementById("goal-1").value.trim(),
      goalTwo: document.getElementById("goal-2").value.trim(),
      goalThree: document.getElementById("goal-3").value.trim(),
      goalFour: document.getElementById("goal-4").value.trim(),
      goalFive: document.getElementById("goal-5").value.trim(),
      id: userGoals,
    };

    localStorage.setItem("savedGoals", JSON.stringify(goalsData));

    console.log("Goals Entry saved to local storage", goalsData);
  } else {
    console.log("Goals entry Form Validation failed. View errors");
  }
});

// Validate Goals form
function validateGoalsForm() {
  const goalOne = document.getElementById("goal-1").value.trim();
  const goalTwo = document.getElementById("goal-2").value.trim();
  const goalThree = document.getElementById("goal-3").value.trim();
  const goalFour = document.getElementById("goal-4").value.trim();
  const goalFive = document.getElementById("goal-5").value.trim();

  const goalOneError = document.getElementById("goalOneError");
  const goalTwoError = document.getElementById("goalTwoError");
  const goalThreeError = document.getElementById("goalThreeError");
  const goalFourError = document.getElementById("goalFourError");
  const goalFiveError = document.getElementById("goalFiveError");

  goalOneError.textContent = "";
  goalTwoError.textContent = "";
  goalThreeError.textContent = "";
  goalFourError.textContent = "";
  goalFiveError.textContent = "";

  goalOneError.className = "error-message";
  goalTwoError.className = "error-message";
  goalThreeError.className = "error-message";
  goalFourError.className = "error-message";
  goalFiveError.className = "error-message";

  let isValid = true;

  if (goalOne) {
    if (goalOne.length > 32) {
      goalOneError.textContent = "Goal cannot exceed 32 characters";
      isValid = false;
    }
  }

  if (goalTwo) {
    if (goalTwo.length > 32) {
      goalTwoError.textContent = "Goal cannot exceed 32 characters";
      isValid = false;
    }
  }

  if (goalThree) {
    if (goalThree.length > 32) {
      goalThreeError.textContent = "Goal cannot exceed 32 characters";
      isValid = false;
    }
  }

  if (goalFour) {
    if (goalFour.length > 32) {
      goalFourError.textContent = "Goal cannot exceed 32 characters";
      isValid = false;
    }
  }

  if (goalFive) {
    if (goalFive.length > 32) {
      goalFiveError.textContent = "Goal cannot exceed 32 characters";
      isValid = false;
    }
  }
  return isValid;
}

// Render goals form data
function renderGoals(){
    const savedGoals = JSON.parse(localStorage.getItem("savedGoals"));

    if (!savedGoals) return;

    document.getElementById("goal-1").value = savedGoals.goalOne || "";
    document.getElementById("goal-2").value = savedGoals.goalTwo || "";
    document.getElementById("goal-3").value = savedGoals.goalThree || "";
    document.getElementById("goal-4").value = savedGoals.goalFour || "";
    document.getElementById("goal-5").value = savedGoals.goalFive || "";
}

document.addEventListener("DOMContentLoaded", renderGoals);

// Load saved projects from projects page so users can access projects quickly
function loadProjectForm(project) {
  localStorage.setItem("currentProjectId", project.id);
  window.location.href = "projects.html";
}
// Delete projects from dashboard page
function deleteProjectForm(projectId) {
  const savedProjects = JSON.parse(
    localStorage.getItem("savedPatternProjects"),
  );
  const updatedProjects = savedProjects.filter(
    (project) => project.id !== projectId,
  );
  localStorage.setItem("savedPatternProjects", JSON.stringify(updatedProjects));
  renderProjects();
}

// Render saved projects so that the saved data is on the projects page for user's access
function renderProjects() {
  const savedProjects = JSON.parse(
    localStorage.getItem("savedPatternProjects"),
  );
  const projectContainer = document.getElementById("project-links-container");

  projectContainer.innerHTML = "";

  if (savedProjects && savedProjects.length > 0) {
    savedProjects.forEach((project) => {
      const projectRow = document.createElement("div");
      projectRow.className = "project-row";

      const projectLink = document.createElement("a");
      projectLink.className = "project-link";
      projectLink.href = "#";
      projectLink.textContent = `${project.projectTitle} ${project.currentDate}`;

      projectLink.addEventListener("click", (event) => {
        event.preventDefault();
        loadProjectForm(project);
      });

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.textContent = "X";
      deleteButton.className = "delete-btn";

      deleteButton.addEventListener("click", (event) => {
        const confirmDelete = confirm(
          "Are you sure you would like to remove this project entry?",
        );
        if (confirmDelete) {
          deleteProjectForm(project.id);
        }
      });

      projectRow.append(projectLink);
      projectRow.append(deleteButton);

      projectContainer.append(projectRow);
    });
  } else {
    const projectMessage = document.createElement("p");
    projectMessage.className = "project-message";
    projectMessage.textContent = "No projects saved yet";
    projectContainer.appendChild(projectMessage);

  }
}
renderProjects();

// Ravelry Patterns
const ravelryPatterns = document.getElementById("ravelry-patterns");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/patterns/search.json",
      {},
    );
    const json = await response.json();
    const apiData = json.data || {};

    const patterns = apiData.patterns || [];

    ravelryPatterns.innerHTML = "";
    patterns.forEach((pattern) => {
     const patternContainer = document.createElement("div");
      patternContainer.className = "pattern-box";
      
      const patternLink = document.createElement("a");
      patternLink.className = "pattern-link";
      patternLink.href = `https://www.ravelry.com/patterns/library/${pattern.permalink}`;
      patternLink.target = "_blank";
      patternContainer.appendChild(patternLink);

      const patternPhoto = document.createElement("img");
      patternPhoto.className = "pattern-photo";
      patternPhoto.src = `${pattern.first_photo.small_url}`;
      patternPhoto.alt = `${pattern.name}`;
      patternLink.appendChild(patternPhoto);

      const patternName = document.createElement("h4");
      patternName.className = "pattern-name";
      patternName.textContent = `${pattern.name} by ${pattern.pattern_author.name}`;
      patternLink.appendChild(patternName);

      ravelryPatterns.appendChild(patternContainer);
    });
  } catch (error) {
    console.error("Error loading patterns", error.message);
    ravelryPatterns.textContent = "Failed to load patterns";
  }
});
