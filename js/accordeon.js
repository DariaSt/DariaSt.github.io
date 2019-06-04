const teamList = document.querySelector('.team__list');
const teamItem = document.getElementsByClassName('team__item');

teamList.addEventListener('click', function(e){
  const parentNode = e.target.parentNode;
  if(parentNode.classList.contains('team__item--active')){
    parentNode.classList.remove('team__item--active');
  }
  else if(parentNode.classList.contains('team__item')){ 
    for(let i=0; i<teamItem.length; i++){
      teamItem[i].classList.remove('team__item--active');
    }
    parentNode.classList.toggle('team__item--active');
  }
})

const menuList = document.querySelector('.menu__list');
const menuItem = document.getElementsByClassName('menu__item');
menuList.addEventListener('click', function(e){
  const parentNode = e.target.parentNode.parentNode;
  if(parentNode.classList.contains('menu__item--active')){
    parentNode.classList.remove('menu__item--active');
  }
  else if(parentNode.classList.contains('menu__item')){ 
    for(let i=0; i<menuItem.length; i++){
      menuItem[i].classList.remove('menu__item--active');
    }
    parentNode.classList.toggle('menu__item--active');
  }
})