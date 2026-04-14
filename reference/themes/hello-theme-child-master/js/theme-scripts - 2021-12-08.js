window.onload = function() {

  const navbar = document.getElementById('header-bar');
  const headerlogo = document.getElementById('header-logo');

  console.log( document.documentElement.scrollTop );
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

}
