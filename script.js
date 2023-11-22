document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var navUL = document.querySelector('.site-nav-grid ul');

    hamburger.addEventListener('click', function() {
        navUL.classList.toggle('menu-open');
    });
});
