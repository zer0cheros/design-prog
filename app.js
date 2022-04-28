const navbar = document.querySelector('.navbar')
const content = document.querySelector('.content')

window.onscroll = ()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('navbar-scroll')
        content.style.top = '80%'
       } else {
        navbar.classList.remove('navbar-scroll')
        content.style.top = '100%'  
      }
}