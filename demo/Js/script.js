// JavaScript to toggle the navigation menu on mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark'); // This is the close icon
});


const video = document.getElementById("myVideo");
let soundOn = false;

// First click anywhere = unmute
document.addEventListener("click", function () {
  if (!soundOn) {
    video.muted = false;
    video.play().catch(err => console.log("Playback error:", err));
    soundOn = true;
  }
}, { once: true });

// Later clicks on video toggle mute on/off
video.addEventListener("click", function (event) {
  soundOn = !soundOn;
  video.muted = !soundOn;
  event.stopPropagation(); // Prevent it from triggering outer document click
});

// Toggle FAQ answers and icons
document.querySelectorAll('.faq-item').forEach(item => {
  const header = item.querySelector('.faq-header');
  const toggleBtn = item.querySelector('.faq-toggle');
  const answer = item.querySelector('.faq-answer');

  function toggle() {
    const isActive = answer.classList.contains('active');
    if (isActive) {
      answer.classList.remove('active');
      toggleBtn.textContent = '+';
    } else {
      answer.classList.add('active');
      toggleBtn.textContent = '✕';
    }
  }

  header.addEventListener('click', toggle);
  header.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});

// dynamic animatoin script
const elements = document.querySelectorAll('.animate-item');
    let lastScrollY = window.scrollY;
    const animatedFlags = new WeakMap();

    window.addEventListener('scroll', function () {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      elements.forEach(function (el) {
        const rect = el.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        const alreadyAnimated = animatedFlags.get(el);

        if (isScrollingDown && inView && !alreadyAnimated) {
          const animClass = el.getAttribute('data-anim');
          el.classList.add('animate__animated', animClass);
          animatedFlags.set(el, true);
        }
      });

      lastScrollY = currentScrollY;
    });