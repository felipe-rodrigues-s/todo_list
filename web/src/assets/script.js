const closeMessage = document.querySelector('#close-massage');
const message = document.querySelector('.message')

if(closeMessage){
  closeMessage.addEventListener('click', ()=>{
    message.style.display = 'none'
  })
  setTimeout(() => {
    message.style.display = 'none'
  }, 5000);
}