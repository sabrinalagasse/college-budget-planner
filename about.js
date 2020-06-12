//access elements
let aboutBtn = document.getElementById('openAbout');
let aboutElement = document.getElementById('about');

aboutBtn.onclick = toggleAbout;

function toggleAbout() {
  aboutElement.classList.toggle('hidden');
}
