// Define the base URL for your GitHub Pages
const baseURL = "https://lendherm.github.io/wdd230/";

// Define the URL for the links.json file
const linksURL = `${baseURL}data/links.json`;

// Function to show a loading indicator
function showLoadingIndicator() {
    const activityLinksContainer = document.querySelector('.learning-activities ul');
    activityLinksContainer.innerHTML = '<li>Loading activities...</li>';
}

// Function to display a "no data" message
function displayNoDataMessage() {
    const activityLinksContainer = document.querySelector('.learning-activities ul');
    activityLinksContainer.innerHTML = '<li>No activities found.</li>';
}

// Function to fetch the links data
async function getLinks() {
    showLoadingIndicator(); // Show loading indicator

    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            if (data.weeks && data.weeks.length > 0) {
                displayLinks(data.weeks); // Call the function to display links
            } else {
                displayNoDataMessage(); // Display message if no data is found
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
        displayError('Failed to load activity links. Please try again later.');
    }
}

// Function to display the links
function displayLinks(weeks) {
    const activityLinksContainer = document.querySelector('.learning-activities ul');

    // Clear any existing content
    activityLinksContainer.innerHTML = '';

    // Loop through each week and create the HTML structure
    weeks.forEach(week => {
        // Create the main list item for the week
        const weekItem = document.createElement('li');

        // Create the toggle link for the week
        const weekToggle = document.createElement('a');
        weekToggle.href = "#";
        weekToggle.classList.add('submenu-toggle');
        weekToggle.textContent = week.week;
        weekItem.appendChild(weekToggle);

        // Create the submenu list
        const submenuList = document.createElement('ul');
        submenuList.classList.add('submenu');

        // Add each link to the submenu
        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.href = baseURL + link.url; // Use baseURL to construct the full path
            linkAnchor.textContent = link.title;
            if (link.target) {
                linkAnchor.target = link.target; // Add target="_blank" if specified
            }
            linkItem.appendChild(linkAnchor);
            submenuList.appendChild(linkItem);
        });

        // Append the submenu to the week item
        weekItem.appendChild(submenuList);

        // Append the week item to the main list
        activityLinksContainer.appendChild(weekItem);
    });
}

// Function to display an error message
function displayError(message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
    document.body.appendChild(errorElement);
}

// Call the getLinks function to start the process
getLinks();