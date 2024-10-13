const btnToTop = document.querySelector("#btn-footer")

btnToTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
};