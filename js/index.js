//adding togglebar to profile button

const profileButton=document.querySelector('#profileButton');
profileButton.addEventListener('click',event=>{
  
  var toggleBar=document.getElementById('toggleBar');
  toggleBar.classList.toggle('hidden');
})


const cartButton=document.querySelector('#my-cart');
cartButton.addEventListener('click',event=>{
 window.location.href='./cart.html';
})