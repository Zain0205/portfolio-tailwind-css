window.onscroll = () => {
  const header = document.querySelector('header')
  const fixNav = header.offsetTop;
  const top = document.getElementById('to-top')

  if(window.pageYOffset > fixNav){
    header.classList.add('navbar-fix')
    top.classList.remove('hidden')
    top.classList.add('flex')
  } else {
    header.classList.remove('navbar-fix')
    top.classList.remove('flex')
    top.classList.add('hidden')
  }
}

const hamburger = document.querySelector('#humberger')
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

window.addEventListener('click', (e) => {
  if(e.target != hamburger && e.target != navMenu){
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})

const nama = document.getElementById('Name')
const email = document.getElementById('Email')
const pesan = document.getElementById('Pesan')
const tombol = document.getElementById('kirim')

tombol.addEventListener('click', () => {
  
  if(nama.value == '' && email.value == '' && pesan.value == ''){
    alert('Mohon Lengkapi Pesan Terlebih Dahulu')
  } else {
    alert(`Terimakasih ${nama.value} Telah Menuliskan pesan`)
  }
  
  nama.value = '';
  email.value = '';
  pesan.value = '';
  
})

const darkToggle = document.getElementById('d-toggle')
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
  if (darkToggle.checked){
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})