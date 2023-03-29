let mainTitle = document.getElementById('main-title');
let mainNav = document.getElementById('main-nav');

// document.body.scrollTop = 800; // TEMP: remove

document.body.addEventListener("scroll", onScroll);
onScroll()

function onScroll() {
  setNavOpacity()
  setReveals()
}

function setNavOpacity() {
  let currentScroll = document.body.scrollTop
  let maxScroll = mainTitle.scrollHeight;
  let startOffset = 0
  if (currentScroll >= maxScroll) {
    mainNav.style.opacity = 1;
  } else {
    mainNav.style.opacity = ((currentScroll*(1-startOffset)) / maxScroll)+startOffset
  }
}
function setReveals() {
  let elementViewMargin = 150;
  document.querySelectorAll('.reveal').forEach((item, i) => {
    if (item.getBoundingClientRect().top < window.innerHeight - elementViewMargin) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}

document.body.addEventListener("resize", onResize);
onResize()

function onResize() {
  addScrollOffsets()
  setReveals()
}

function addScrollOffsets() {
  Array.from(document.getElementsByClassName('add-scroll-offset')).forEach((item, i) => {
    item.style.paddingTop = mainNav.clientHeight + 'px'
  });
}
