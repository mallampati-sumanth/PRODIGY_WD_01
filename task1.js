window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to right, #6dd5ed, #2193b0)'; 
    } else {
        navbar.style.background = 'linear-gradient(to right, #2193b0, #6dd5ed)'; 
    }
});
