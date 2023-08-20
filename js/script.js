// Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');

// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');

};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click',function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
    }
});

// Scroll to anchor smoothly
const smoothScroll = target => {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  };

  // Add click event listeners to navbar links
  document.querySelector('#home').addEventListener('click', () => {
    smoothScroll('#home');
  });

  document.querySelector('#about-link').addEventListener('click', () => {
    smoothScroll('#about');
  });

  document.querySelector('#experience-link').addEventListener('click', () => {
    smoothScroll('#experience');
  });

  document.querySelector('#contact-link').addEventListener('click', () => {
    smoothScroll('#contact');
  });

  