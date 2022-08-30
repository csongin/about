
function changeDisplay() {
  const iconBack = document.querySelector('#home_back');
  const iconFront = document.querySelector('#home_front')

  if(iconBack.style.display === 'none') {
    iconBack.style.display = 'inline-flex';
    iconFront.style.display = 'none';
  } else {
    iconBack.style.display = 'none';
    iconFront.style.display = 'inline-flex';
  }
}