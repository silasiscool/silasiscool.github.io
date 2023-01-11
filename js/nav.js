// js file which adds the html for the main nav to ensure consistent page top throughout the site

// get main nav and store as an element
const mainNav = document.getElementById('main-nav');

// function to add nav link
function addNavItem(text, link) {
  // create anchor element as navItem
  let navItem = document.createElement('a');
  // give navItem innerHTML, href, and classes
  navItem.innerHTML = text;
  navItem.href = link;
  navItem.classList.add('main-nav-item');
  // append navItem to mainNav
  mainNav.appendChild(navItem);
};

// add each nav link
addNavItem('Home','index');
addNavItem('About Me', 'about-me');
addNavItem('Web Projects','web-projects');
