
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

let dDay = new Date("January 21, 2022, 0:00:00").getTime();

setInterval(function() {
  let today = new Date().getTime();
  let gap =  today - dDay;
  let day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  let hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.ceil((gap % (1000 * 60)) / 1000);

  document.getElementById("count").innerHTML = `프로그래밍 공부 시작한지 ${day}일 ${hour}시간 ${min}분 ${sec}초 `;
}, 1000);