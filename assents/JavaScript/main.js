// EventListener's Front

window.addEventListener('scroll', function () {
    let header = document.querySelector('.main-header');

    if (window.scrollY > 100) {
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


document.getElementById('user-access').addEventListener("click", () => {
    abrirModal();
});

document.getElementById('exit-modal').addEventListener("click", () => {
    fecharModal();
});

document.getElementsByClassName('container-modal').addEventListener("click", () => {
    fecharModal();
});


// Variáveis Function