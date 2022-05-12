const navbar = document.querySelector('.navbar')
const content = document.querySelector('.content')
const rightText = document.querySelector('.right-text')
const leftText = document.querySelector('.left-text')

window.onscroll = ()=>{
  color()
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('navbar-scroll')
        content.style.top = '80%'
       } else {
        navbar.classList.remove('navbar-scroll')
        content.style.top = '100%'  
      }
}
function color(){
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    rightText.style.color = 'black'
    leftText.style.color = 'black'
    rightText.style.transition = '2s'
    leftText.style.transition = '2s'
  }
  else{
    rightText.style.color = 'var(--text-color)'
    leftText.style.color = 'var(--text-color)'
  }
}
  
