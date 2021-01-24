const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



for(let n= 1; n <= 5; n++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + n + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    displayedImage.src = e.target.src;
  }
}



btn.onclick = function() {
  const btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
