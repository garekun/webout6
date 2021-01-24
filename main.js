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
h1 {
    font-family: helvetica, arial, sans-serif;
    text-align: center;
  }
  
  body {
    width: 640px;
    margin: 0 auto;
  }
  
  .full-img {
    position: relative;
    display: block;
    width: 640px;
    height: 480px;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 640px;
    height: 480px;
    background-color: rgba(0,0,0,0);
  }
  
  button {
    border: 0;
    background: rgba(150,150,150,0.6);
    text-shadow: 1px 1px 1px white;
    border: 1px solid #999;
    position: absolute;
    cursor: pointer;
    top: 2px;
    left: 2px;
  }
  
  .thumb-bar img {
    display: block;
    width: 20%;
    float: left;
    cursor: pointer;
  }
