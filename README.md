# Track the Thread: Knitting/Crochet Journal Web Application
Overview:

As a knitter myself, taking notes while working through different patterns helps me keep track of my progress, remember which patterns I loved versus could improve, and more. This project addresses the need for an easily-accessible notes-taking application that considers different aspects of knitting/crocheting so that way, users can take notes on their creations.

## Capstone Requirements
| Requirement | Implementation |
|-------------|-------------|
|**Retrieve data from a third-party API:**| • Integrated Ravelry API for users to view trending knitting/crochet Ravelry patterns on dashboard page|
|**Analyze data that is stored in arrays, objects, sets or maps and display information**||
|**Validate user input and either prevent the invalid input or inform the user about it**||
|**Persist important data to the user to local storage and make the stored data accessible**||
|**Responsive design**||

## Project Organization
| Page | Description |
|------|-------------|
|**Welcome Page**|Provides an overview of what Track the Thread is and what to expect from using the web application including row tracking, yarn fibers, and needle size.|
|**Create Profile Page**|Using JavaScript, users enter their first name, last name, and visual preference to create a profile. The form validates the users information to make sure that all required inputs are filled in with the correct data. The information entered is saved to the users’ local storage and then retrieved to display the data on various parts of the site.|
|**Dashboard Page**|Displays information for users to create a new project entry, access previously saved entries, and explore trending knitting/crochet patterns using JavaScript and the Ravelry API. When users click the add new project button, they are directed to the blank Project page and when they click a saved project, they are redirected to the Project page with the information provided filled in. By clicking on one of the trending patterns, users are directed to the pattern on Ravelry.com.|
|**Project Page**|Allows users to input information about each of their projects through the Project page form. The form requires each project entry to have a title and date and verifies the data types and length of each optional field. Users can track the pattern link, yarn fiber, yarn weight, needle size, age/fit/size, which row they are on, and additional notes. Once users save the entry to local storage, it is listed in the Saved Projects section to be easily accessed. In the Saved Projects section, users can remove entries.|
|**About Page**|Provides users with an in-depth overview of the web application that includes the project overview, features, organization, a walkthrough video, and licenses/credit. On this page, there is a section that discusses the creator as well.|

## Prerequsities

## How to Run the Project

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

## Licenses and Credits
Ravelry API: This product uses the <a href="https://www.ravelry.com/api#index">Ravelry API</a> but is not endorsed or certified by Ravelry.

Google Fonts: Poppins by Indian Type Foundry via <a href="https://fonts.google.com/specimen/Poppins">Google Fonts</a>.

Images:
- Photo by <a href="https://unsplash.com/@kuzmao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alevtina Nalevo</a> on <a href="https://unsplash.com/photos/a-pair-of-socks-tRWFmJBdXzQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@budetsvyazano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marina Ermakova</a> on <a href="https://unsplash.com/photos/person-holding-blue-and-white-yarn-M0-gDti0RYM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@joony?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JOONY</a> on <a href="https://unsplash.com/photos/green-white-and-yellow-knit-textile-VleAEtGmQH0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
