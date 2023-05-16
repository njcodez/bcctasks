window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const topSection = document.querySelector('.top-section');
    const topSectionHeight = topSection.offsetHeight;

    if (window.pageYOffset > topSectionHeight) {
      header.classList.add('transparent');
    } else {
      header.classList.remove('transparent');
    }
  });
  

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("transparent", window.scrollY > 0);
});

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}