//adding togglebar to profile button
console.log(document.getElementById('profileButton'))
document.getElementById('profileButton').addEventListener('click',function(){
  
  var toggleBar=document.getElementById('toggleBar');
  toggleBar.classList.toggle('hidden');
})