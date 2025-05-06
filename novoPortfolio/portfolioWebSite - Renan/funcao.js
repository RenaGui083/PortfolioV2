function instagram() {
    window.location.href = 'https://www.instagram.com/renanrochadev/'; 
  }

function linkedin() {
    window.location.href = 'https://www.linkedin.com/in/renan-rocha-078770359/';  
  }

function desenvolvimento() {
    window.location.href = 'portfolioWebSite - Renan/desenvolvimento.html';
}
function design() {
    window.location.href = 'portfolioWebSite - Renan/design.html';  
}
function suporte() {
  window.location.href = 'portfolioWebSite - Renan/suporte.html';  
}

function imc() {
    window.location.href = 'https://renagui083.github.io/imcSite/';
}
function contatar(){
    window.scrollTo({
        top: 10000,  
        left: 0,   
        behavior: 'smooth' 
    });
}
function filterImages() {
  let filter = document.getElementById("filter").value;
  let images = document.querySelectorAll(".gallery img");
  
  images.forEach(img => {
      if (filter === "all" || img.classList.contains(filter)) {
          img.style.display = "block";
      } else {
          img.style.display = "none";
      }
  });
  
}
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("filter");
  const section = document.getElementById("section3");

  select.addEventListener("change", function () {
      if (select.value === "all") {
          section.style.height = "650vh";
      } else {
          section.style.height = "270vh"; 
      }
  });
});
function aumentarDiv(img) {
    img.classList.toggle("aumentada");
}