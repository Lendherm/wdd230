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
            throw new Error(await response.text());
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
        const weekItem = document.createElement('li');

        // Create the toggle link for the week
        const weekToggle = document.createElement('a');
        weekToggle.href = "#";
        weekToggle.classList.add('submenu-toggle');
        weekToggle.textContent = week.week;
        weekItem.appendChild(weekToggle);

        // Create the submenu list (hidden by default)
        const submenuList = document.createElement('ul');
        submenuList.classList.add('submenu');
        submenuList.style.display = 'none';  // Initially hide the submenu

        // Add each link to the submenu
        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            const linkAnchor = document.createElement('a');

            // Check if the URL is absolute or relative
            const fullUrl = link.url.startsWith('http') ? link.url : baseURL + link.url;

            linkAnchor.href = fullUrl;  // Use the correct URL (absolute or relative)
            linkAnchor.textContent = link.title;

            // Add target="_blank" if specified
            if (link.target) {
                linkAnchor.target = link.target;
            }

            linkItem.appendChild(linkAnchor);
            submenuList.appendChild(linkItem);
        });

        // Append the submenu to the week item
        weekItem.appendChild(submenuList);

        // Append the week item to the main list
        activityLinksContainer.appendChild(weekItem);

        // Add click event to toggle visibility of the submenu
        weekToggle.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            // Close any other open submenus
            const allSubmenus = document.querySelectorAll('.submenu');
            allSubmenus.forEach(submenu => {
                if (submenu !== submenuList) {
                    submenu.style.display = 'none';  // Hide other submenus
                }
            });

            // Toggle the current submenu visibility
            submenuList.style.display = (submenuList.style.display === 'none' || submenuList.style.display === '') ? 'block' : 'none';
        });
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
