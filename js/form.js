const form = document.querySelector('.form');
const popup = document.querySelector('.delivery__popup');
const popupContent = document.querySelector('.popup__content');
const popupClose = document.querySelector('.popup__button');
var text = document.createElement('p');

form.onsubmit = function(e){
  e.preventDefault();
  const formData = new FormData(form);
  formData.append('to', 'mail@mail.ru');
  const request = new XMLHttpRequest();
  // request.responseType = 'json';
  request.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  request.send(formData);
  request.addEventListener('load', function(){
    const _response = JSON.parse(request.response);
    popup.classList.add('delivery__popup--active');
    document.body.classList.toggle('hidden');
    if(_response.status){
      text.textContent=_response.message;
    }
    else{
      text.textContent = _response.message;
      }
    popupContent.insertBefore(text, popupClose);
  });
}

popupClose.addEventListener('click', function(e){
  e.preventDefault();
  popup.classList.remove('delivery__popup--active');
  document.body.classList.toggle('hidden');
  popupContent.removeChild(text);
})

