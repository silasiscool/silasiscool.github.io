let mainTitle = document.getElementById('main-title');
let mainNav = document.getElementById('main-nav');
let showNavButton = document.getElementById('show-nav');

showNavButton.addEventListener('click', () => {
  showNavButton.classList.add('show-nav')
  mainNav.classList.add('show-nav')
  showNavButton.style.removeProperty('opacity')
  mainNav.style.removeProperty('opacity')
})

document.querySelectorAll('#main-nav a').forEach((item) => {
  item.addEventListener('click', () => {
    onScroll()
  })
});

document.body.addEventListener("scroll", onScroll);
onScroll()

function onScroll() {
  setNavOpacity()
  if (window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true) {
    document.querySelectorAll('.reveal').forEach(item => item.classList.add('show'));
  } else {
    setReveals()
  }
}

function setNavOpacity() {
  let currentScroll = document.body.scrollTop
  let maxScroll = mainTitle.scrollHeight;
  let startOffset = 0
  let opacity = 0
  if (currentScroll >= maxScroll) {
    opacity = 1
  } else {
    opacity = ((currentScroll*(1-startOffset)) / maxScroll)+startOffset
  }
  if (currentScroll >= maxScroll || currentScroll == 0) {
    setTimeout(function () {
      showNavButton.classList.remove('show-nav')
      mainNav.classList.remove('show-nav')
    }, 5e2);

  }

  mainNav.style.opacity = opacity;
  showNavButton.style.opacity = 1 - opacity;
}

function setReveals() {
  let elementViewMarginPercent = .10
  let elementViewMargin = window.innerHeight * elementViewMarginPercent
  document.querySelectorAll('.reveal').forEach(item => {
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
