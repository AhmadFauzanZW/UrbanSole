const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})
    ;

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
});

function toggleAccordion(header) {
    const item = header.parentElement;
    item.classList.toggle("open");
};

function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
};