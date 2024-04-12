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

// Variáveis Function