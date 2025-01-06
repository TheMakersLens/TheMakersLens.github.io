function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
  
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
  
document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

    $('a[href*="#"]').click(function() {
        const target = $($(this).attr('href')); // Find the target section
        const navbarHeight = $('.Navbar').outerHeight(); // Dynamically get the navbar height
    
        if (target.length) { // Ensure the target exists
            const offsetTop = target.offset().top - navbarHeight - 20; // Add buffer of 20px
            $('html, body').animate({
                scrollTop: offsetTop
            }, 500); // Smooth scroll duration
        }
        return false; // Prevent default anchor behavior
    });
    
    
    
    
    