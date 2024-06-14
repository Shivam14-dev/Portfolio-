let theme = 'light';// Define a function to toggle between light and dark themes
function toggleTheme() {
    const root = document.documentElement;
    const moonIcon = document.querySelector('.bx-moon');
    const sunIcon = document.querySelector('.bx-sun');
    
    if (theme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        theme='dark';
        root.style.setProperty('--bg-color', 'black');
        root.style.setProperty('--second-bg-color', '#393636');
        root.style.setProperty('--text-color', 'snow');
        root.style.setProperty('--main-color', '#0ef');
         // Show the sun icon
        
    } else {
        // Show the sun icon
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        theme='light';
        root.style.setProperty('--bg-color', 'white');
        root.style.setProperty('--second-bg-color', '#black');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--main-color', '#0ef');
      
    }
    console.log('toggleTheme',theme);
}
// Define your state (e.g., 'light' or 'dark')
 // Change this to 'light' or 'dark' based on your application logic

// Call the toggleTheme function with the chosen theme

// typing animation starts 
let type = new Typed('.auto-input',{
    strings:['EE Student @MGMCET..!','MERN Developer...!','Salesforce Developer...!','UI UX Designer...!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})
// typing animation end 

//toggle icon nav bar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
//scroll section active links

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*=======================Sticky navbar ======================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon and navbar when click navbar  link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*=======================Scroll Reveal ======================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .projects-container, .contact-form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});