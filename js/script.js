const menuBar = document.getElementById('menu-bar');
const navbar = document.getElementById('navbar');

menuBar.onclick = () => {
  menuBar.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menuBar.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.getElementById('search-icon').onclick = () => {
  document.getElementById('search-form').classList.toggle('active');
}

document.getElementById('close').onclick = () => {
  document.getElementById('search-form').classList.remove('active');
}