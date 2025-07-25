 // Hamburger Menu Toggle
 const navToggle = document.querySelector('.nav-toggle');
 const mobileNav = document.querySelector('.mobile-nav');
 
 navToggle.addEventListener('click', () => {
     navToggle.classList.toggle('active');
     mobileNav.classList.toggle('active');
 });

 const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
 mobileNavLinks.forEach(link => {
     link.addEventListener('click', () => {
         navToggle.classList.remove('active');
         mobileNav.classList.remove('active');
     });
 });

 // Theme Toggle
 const themeToggle = document.getElementById('theme-toggle');
 const body = document.body;

 // Function to apply theme
 const applyTheme = (theme) => {
     body.setAttribute('data-theme', theme);
     localStorage.setItem('portfolio-theme', theme);
 };

 // Event listener for the button
 themeToggle.addEventListener('click', () => {
     const currentTheme = body.getAttribute('data-theme');
     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
     applyTheme(newTheme);
 });
 
 // Check for saved theme in localStorage on page load
 const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
 applyTheme(savedTheme);


 // Navbar scroll effect - This is optional for fixed nav, but can add shadow or other effects on scroll
 const navbar = document.querySelector('.navbar');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 20) {
         // You could add a class here to change style on scroll, e.g., a more prominent shadow.
         // For now, it doesn't do anything as the nav is fixed.
     } else {
         // remove the class
     }
 });

 // Fade-in animation on scroll
 const sections = document.querySelectorAll('.section');
 const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         } else {
             // This makes the animation replay every time it enters the viewport
             entry.target.classList.remove('visible');
         }
     });
 }, {
     threshold: 0.1 
 });
 sections.forEach(section => {
     observer.observe(section);
 });