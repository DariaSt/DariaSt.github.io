const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.sidebar');

function showMenu(){
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('hidden');
}

hamburger.addEventListener('click', function(){
  showMenu();
});