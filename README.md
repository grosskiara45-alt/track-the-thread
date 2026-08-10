# Track the Thread: Knitting/Crochet Journal Web Application
Overview:

As a knitter myself, taking notes while working through different patterns helps me keep track of my progress, remember which patterns I loved versus could improve, and more. This project addresses the need for an easily-accessible notes-taking application that considers different aspects of knitting/crocheting so that way, users can take notes on their creations.

## Capstone Requirements
- **Retrieve data from a third-party API:** 
    - Ravelry API: Integrated API from Ravelry, a free community site for knitters/crocheters so users can view trending knitting/crochet Ravelry patterns on dashboard page.
- **Validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved):**
    - Profile Form: The validateProfile function checks that each input is entered. If an input is empty, the form prevents saving and displays an error message.
    - Goals Form: The validateGoalsForm function checks the format of the optional inputs. If the optional inputs are entered incorrectly, the form prevents saving and displays an error message.
    - Projects Form: The validateProjectForm function checks the format of the required and optional inputs. If either are entered incorrectly or if the required inputs are not entered, the forms prevent saving and display an error message.
- **Persist important data to the user to local storage and make the stored data accessible in your app. (including after reload/refresh):**
    - User Data: Once the profile, goals, and project forms are validated, the users data is saved to local storage as separate objects or within an array.
- **Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app:**
    - Profile Data: The Welcome Header parses through the data stored in the saved profile object, checks if the object has a value for the firstname key, retrieves the Welcome Header element, and displays the user’s first name in the header.
    - Goals Data: The Goals Form parses through the data stored in the savedGoals object, checks the value of each goal key, and displays the saved data in the inputs.
    - Project Data: The Project Form parses the data stored in the savedPatternProjects array, finds each project by the project id, checks each input for a value, and calls back the saved data on the form and changes the Project Header to correspond.
    - Saved Projects Data: The Project Form parses through the data stored in the savedPatternProjects array and checks if there are any saved projects. If there are projects saved, it retrieves the project links container, creates elements in the container, and displays a stylized link to each project top-down with a stylized delete button.
- **Responsive Design:**
    - Data Visualization: This web application has a polished and professional design with a consistent font stack, color palette, and visual hierarchy. 
    - Media Queries: This web application is built mobile-first and uses media queries to adjust to different screen sizes.

## Project Organization
| Page | Description |
|------|-------------|
|**Welcome Page**|Provides users an overview of Track the Thread and what to expect from the application.|
|**Create Profile Page**|Users provide their first and last name to create their Track the Thread profile.|
|**Dashboard Page**|Users can create a new project entry, list out their knitting/crochet goals, view their previously saved projects, and explore trending Ravelry patterns.|
|**Project Page**|Users track their project details such as yarn fiber, needle sizes, etc. as well as additional notes about their project. Once the entry is saved, they are able to access it in the Saved projects section.|
|**About Page**|Users can learn more about the coding behind Track the Thread and the creator of the web application. This page includes a general project overview as well as a video walkthrough.|

## Prerequsities
Before installing the application, you’ll need to obtain the Ravelry API key:
1. **Create a Standard Ravelry account:** If you do not have a Ravelry account, sign up at https://www.ravelry.com/ and log in.
2. **Register as a Developer:** Once you have your account, go to the Ravelry Developer Portal at https://www.ravelry.com/pro/developer. You will be prompted to sign up for a Pro/Developer account.
3. **Read the Ravelry API Documentation:** Before creating your application, read the documentation. For this website, we will be using the Basic Authorization, read only access.
4. **Create a New Application:** On the Developer dashboard page, click “Create an App” and fill in the basic information about your project:
    - App Name: Track the Thread
    - Description: Knitting Journal web application
    - Permission/Type: Read-Only access
5. **Retrieve Your Credentials:** After submitting the form, Ravelry will generate your keys that you will use to create an .env file.

## How to Run the Project
1. **Clone the repository using GIT**
``` bash
git clone https://github.com/grosskiara45-alt/track-the-thread.git
```
2. **Navigate to the project directory**
``` bash
cd track-the-thread
```
3. **Install dependencies**
``` bash
npm install
```
4. **Create environment variables file**
Create a file named `.env` in the project root director with the following content:
```env
PORT = 3000
RAVELRY_USER = your_app_username
RAVELRY_KEY = your_app_password
```
5. **Start the server**
``` bash
npm run dev
```
6. **Access the application**
```bash
http://localhost:3000
```


## Updates
**06/15/2026**
Created GitHub repositories and HTML files for each page of the website. Commented the general page architecture on each HTML file for future reference. Researched how to save users input values to local storage and make stored data accessible on the application.

**06/17/2026**
Added HTML Code to Welcome Page. Completed Project Plan and sent to mentor for review. Researched using local storage and anonymous accounts for saving users data. Researched Node.js and Express.js for permanently saving users data.

**06/23/2026**
Revised project plan before final submission on Sunday. Worked on first draft of HTML code for all pages. Created JS files for dashboard, profile, and projects pages. Continued research on local storage.

**06/24/2026**
Turned in Project plan. Continued working on HTML code and started working on JavaScript logic for creating a profile. Researched local storage and form validation. 

**06/30/2026**
Drafted JavaScript code for users creating their profile, saving the data to the local storage, then retrieving the user's first name to display on the Dashboard Header. Began writing JavaScript code for the Projects page to validate the users input and save project entries. Added content to the About page. Configure default HTML to Prettier formatting.

**07/06/2026**
Restarted Javascript code for Projects pages. Researched Ravelry API documentation for future reference and best steps for using an API securely.

**07/13/2026**
Finished JavaScript code for Projects page so that it validates, saves, and renders links to Projects(on both the Projects and Dashboard pages). Commented out logic for retrieving data from Ravelry API through reviewing the Quote Card project. Continued researching Ravelry API by reading documentation. Sketched out first draft of website logo. Found potential color palette and font. Began CSS stylings for pages.

**07/15/2026**
Implement JS code for fetching Ravelry API data, and displaying collected data onto Display page. Revised a little bit of the CSS and researched design inspiration and color palettes.

**07/31/2026**
Finalized color palette and font stack. Researched inspiration for web app design on Behance. Revised HTML to match Affinity Sketches. Designed sketches for CSS layout of each page using Affinity. Began to implement CSS code.

**08/03/2026**
Continued implementing CSS code for mobile version. Tested JS features with CSS and HTML changes. Researched crediting API and other used resources. Researched writing steps for user to install and run this project.

**08/06/2026**
Revised project file organization and HTML to run project on established port. Continued writing README.md file for users to install and use the project. Researched implementing users visual preferences. 
Implemented media queries for all pages. Fix bug with 'Get Started' button. 

**08/07/2026**
Removed visual preferences from profile options (will add back in the future). Added knitting.crochet goals form to dahsboard that saves to the storeUser array of objects. Implemented footer HTML/CSS code to all pages as desktop version. Fix bugs with Project form validation. Revised css on all pages. Continued writing README.md.

**08/10/2026**
Continued writing READMe and testing functionality. Added content to About Page. Continued adjusting CSS. 

## Licenses and Credits
Ravelry API: This product uses the <a href="https://www.ravelry.com/api#index">Ravelry API</a> but is not endorsed or certified by Ravelry.

Google Fonts: Poppins by Indian Type Foundry via <a href="https://fonts.google.com/specimen/Poppins">Google Fonts</a>.

Images:
- Photo by <a href="https://unsplash.com/@kuzmao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alevtina Nalevo</a> on <a href="https://unsplash.com/photos/a-pair-of-socks-tRWFmJBdXzQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@budetsvyazano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marina Ermakova</a> on <a href="https://unsplash.com/photos/person-holding-blue-and-white-yarn-M0-gDti0RYM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@joony?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JOONY</a> on <a href="https://unsplash.com/photos/green-white-and-yellow-knit-textile-VleAEtGmQH0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
