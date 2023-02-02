function notify(message) {
  const notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = 'block';
  notification.addEventListener('click', () =>{
    notification.style.display = 'none';
  });
}