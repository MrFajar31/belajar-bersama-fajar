const bottomBar = document.querySelector('.bottomBar');
document.querySelector('#toggleBot').onclick = () => {
  bottomBar.classList.toggle('active');
};
//============
//============
function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'none';
}
//============
const toggleBot = document.querySelector('#toggleBot');
document.addEventListener('click', function(e){
  if(!toggleBot.contains(e.target) && !bottomBar.contains(e.target)) { 
    bottomBar.classList.remove('active')
  }
})

//========
