//access elements
let aboutBtn = document.getElementById('openAbout');
let aboutElement = document.getElementById('about');
let closeIcon = document.querySelector('#about > i');

closeIcon.onclick = toggleAbout;
aboutBtn.onclick = toggleAbout;

function toggleAbout() {
  aboutElement.classList.toggle('hidden');
}

//access visualize button
