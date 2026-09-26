$(document).ready(function(){
    $('#mobile-btn').on('click', function (){
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn i').toggleClass('fa-bars fa-x');

    });
});


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            navItems.forEach((item) => {
                item.classList.remove("active");
            });

            const itemAtivo = document.querySelector(
                `.nav-item a[href="#${entry.target.id}"]`
            );

            if (itemAtivo) {
                itemAtivo.parentElement.classList.add("active");
            }
        }
    });

}, {
    threshold: 0.5
});

sections.forEach((section) => {
    observer.observe(section);
});