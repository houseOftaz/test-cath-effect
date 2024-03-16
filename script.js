const main = document.querySelector(".main")
let lastScrollY = window.scrollY;

document.addEventListener("scroll", () => {
    let scrolled = window.scrollY;

    // Réglage de la vitesse de défilement de l'image d'arrière-plan
    let yPos = -scrolled * 0.3; // Ajustez ce nombre pour changer la vitesse du défilement

    // Appliquer la nouvelle position de l'image d'arrière-plan
    main.style.backgroundPosition = `50% ${yPos}px`;
})