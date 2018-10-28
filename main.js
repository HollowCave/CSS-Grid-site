const main = document.querySelector('#main-project');
const imgs = document.querySelectorAll('#images img');
const opacity = 0.6;

// Set First Image Opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset The Opacity
  imgs.forEach(img => (img.style.opacity = 1));

  // Change Current Image To Source Of CLicked Image
  main.src = e.target.src;

  // Add FadeIn class
  main.classList.add('fade-in');

  // Remove fade-in Class After .5 Seconds
  setTimeout(() => main.classList.remove('fade-in'), 500);

  // Change The Opacity To Opacity Var
  e.target.style.opacity = opacity;
}
