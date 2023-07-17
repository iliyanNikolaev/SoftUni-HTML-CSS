const routes = {
    '/': '<h1>Home page</h1><p>Welcome to our site</p>',
    '/catalog': '<h1>Catalog page</h1><p>Some items here...</p>',
    '/login': '<h1>Login page</h1><p>Login form here...</p>',
    '/register': '<h1>Register page</h1><p>Register form here...</p>',
}

const root = document.querySelector('.content');

render('/')

document.querySelector('.navigation').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();

        const path = e.target.getAttribute('href');

        render(path);

        history.pushState('', '', path);
    }
});

window.addEventListener('popstate', (e) => {
    render(location.pathname)
});

function render(path) {
    if (routes[path] != undefined) {
        root.innerHTML = routes[path];
    }
}