// Welcome Header
    // Retrieve User Data from Profile
        // Initialze storeUser using getItem
    const storedUser = localStorage.getItem('profile');

    if(storedUser) {
        const user = JSON.parse(storedUser);

        userName = user.firstname;

        document.getElementById("welcome-header").textContent = `Welcome ${userName}`;
    }else {

        document.getElementById("welcome-header").textContent = "Welcome Guest";

    }

// Current Projects
    // Wait for page to load
    // Set up Variables
    // Fetch past entries data
    // Handle "empty-state"
    // Create current project links dynamically

// Ravelry Patterns
    // Declaration for the Patterns
    // Request Ravelry API
    // Create Functions to get Knitting/Crochet data
    // Filter for just the month's most popular pattern
    // Display filtered data in aesthetic grid on dashboard