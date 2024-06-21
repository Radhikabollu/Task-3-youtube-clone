document.addEventListener('DOMContentLoaded', () => {
    // Form validation for search bar
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', (event) => {
        const searchTerm = searchBar.value.trim();
        if (searchTerm === '') {
            alert('Please enter a search term.');
            event.preventDefault();
        } else {
            // Assuming we have a search function
            // searchYouTube(searchTerm);
            alert(`Searching for: ${searchTerm}`);
        }
    });

    // Interactive tooltips for icons
    const tooltipElements = document.querySelectorAll('.tooltip');

    tooltipElements.forEach((tooltip) => {
        const parent = tooltip.parentElement;
        parent.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
        });

        parent.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });

    // Dynamic content update based on sidebar selection
    const sidebarLinks = document.querySelectorAll('.sidebar-link a');

    sidebarLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            loadPage(href);
            const pageTitle = link.querySelector('.color_name').textContent;
            document.title = `${pageTitle} - Youtube.com clone`;
        });
    });

    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const mainContent = doc.querySelector('body').innerHTML;
                document.querySelector('main').innerHTML = mainContent;
            })
            .catch(error => console.error('Error loading page:', error));
    }
});
