
const cartButton=document.querySelector('#my-cart');
cartButton.addEventListener('click',event=>{
 window.location.href='./cart.html';
})



// button text 

const button1Text=document.querySelector('#pastOrder');
button1Text.addEventListener('click',event=>{
  document.querySelector('.buttonText').innerHTML=`Looks like you don't have any past reservations.`;
})

const button2Text=document.querySelector('#upcoming');
button2Text.addEventListener('click',event=>{
  document.querySelector('.buttonText').innerHTML=` You don't have any upcoming reservations yet`;
})