let menu = document.querySelector('#icon-menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Aneka Komputer', 'Jasa Perbaikan', 'Jasa Instalasi', 'Garansi Produk', 'Penyewaan', 'Dan Sebagainya'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });

function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }; 


const serviceID = "service_vkh7tfg";
const templateID = "template_gitk1op";

emailjs
   .send(serviceID, templateID, params)
   .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Pesan Terkirim");
   })
   .catch((err) => console.log(err));
}
