
function changeDisplay() {
  const icon = document.querySelector('#home_back');

  if(icon.style.display === 'none') {
    icon.style.display = 'inline-flex';
  } else {
    icon.style.display = 'none';
  }
}