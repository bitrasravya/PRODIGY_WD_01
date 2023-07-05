window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('content');
  
    if (window.pageYOffset > content.offsetTop) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });