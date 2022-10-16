
function notify(message) {
  const notificationElement = document.getElementById('notification');
  notificationElement.textContent = message;
  notificationElement.style.display = 'block';
  notificationElement.addEventListener('click', hide);

  function hide(){
    notificationElement.textContent = '';
    notificationElement.style.display = 'none';
    notificationElement.removeEventListener('click', hide);
  }
}