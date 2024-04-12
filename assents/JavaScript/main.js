// EventListener's Front

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("mobile_menu_toggle").addEventListener("click", function() {
//         this.classList.toggle("mobileon");
//         document.getElementById("mobile_nav_list").classList.toggle("mobileon");
//     });
// });

window.addEventListener('scroll', function () {
    let header = document.querySelector('.main-header');

    if (window.scrollY > 1) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// EventListener's Back

window.addEventListener("beforeunload", function (event) {
    if (event.target === window) {
        if (connected === true) {
            alert(`Sua conta foi reiniciada`);
        }
    }
});

document.addEventListener("submit", function (event) {
    event.preventDefault();
    let loginButton = document.getElementById('submit-button-login');
    let registrationForm = document.getElementById('registrationForm');

    if (loginButton) {
        login();
    } else if (registrationForm) {
        registred();
    }
});

// Função para controlar o toggle do menu mobile
document.getElementById("mobile_menu_toggle").addEventListener("click", function() {
    let mobileMenu = document.getElementById("mobile_menu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
    
    // Selecionando o ícone dentro do botão
    const menuIcon = this.querySelector(".hamburger-icon");

    // Alternando entre as classes active e inactive para animar o ícone
    this.classList.toggle("active");

    // Verificando se o botão está ativo ou inativo para alternar entre os ícones
    if (this.classList.contains("active")) {
        // Se estiver ativo, troque o ícone para X
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        // Se estiver inativo, troque o ícone para o ícone original de barras
        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
