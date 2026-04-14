document.addEventListener("DOMContentLoaded", function(){
    console.log('loaded');
    //dom is fully loaded, but maybe waiting on images & css files
    if( document.body.className.match('home') ) {

    } else {
    document.getElementById('header-bar').classList.add("header-bar-scrolled");
    }
});

window.onload = function() {

  const navbar = document.getElementById('header-bar');
  const headerlogo = document.getElementById('header-logo');

  if( document.body.className.match('home') ) {

    // Check scroll position on page load. Fixes Anchor tag issue.
    if (document.documentElement.scrollTop > 100 ) {
      navbar.classList.add("header-bar-scrolled");
    }

    // OnScroll event handler
    const onScroll = () => {

      // Get scroll value
      const scroll = document.documentElement.scrollTop;

      // If scroll value is more than 100 - add class
      if (scroll > 100) {
        navbar.classList.add("header-bar-scrolled");
      } else {
        navbar.classList.remove("header-bar-scrolled");
      }
    }

    window.addEventListener('scroll', onScroll);

  } else {
    navbar.classList.add("header-bar-scrolled");
  }

}
