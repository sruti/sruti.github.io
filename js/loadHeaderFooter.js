function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load header and footer
loadComponent('header', 'header.html');
loadComponent('footer', 'footer.html');
