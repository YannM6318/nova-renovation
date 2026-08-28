const boutonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".accueil");
const imagesProjets = document.querySelectorAll(".projet img");
const lightbox = document.querySelector("#lightbox");
const imageLightbox = document.querySelector(".image-lightbox");
const fermerLightbox = document.querySelector(".fermer-lightbox");
const formulaire = document.querySelector(".formulaire-contact");
const confirmation = document.querySelector(".message-confirmation");


if (formulaire) {

    formulaire.addEventListener("submit", async function (event) {

        event.preventDefault();

        const donnees = new FormData(formulaire);

        const reponse = await fetch(formulaire.action, {
            method: "POST",
            body: donnees,
            headers: {
                Accept: "application/json"
            }
        });

        if (reponse.ok) {
            confirmation.textContent = "Votre demande a bien été envoyée !";
            formulaire.reset();
        } else {
            confirmation.textContent = "Une erreur est survenue. Veuillez réessayer.";
        }

    });

}


boutonMenu.addEventListener("click", function () {

    menu.classList.toggle("ouvert");

    if (menu.classList.contains("ouvert")) {
        boutonMenu.textContent = "✕";
    } else {
        boutonMenu.textContent = "☰";
    }
});

imagesProjets.forEach(function (image) {

    image.addEventListener("click", function () {
        imageLightbox.src = image.src;
        lightbox.classList.add("ouverte");

        document.body.style.overflow = "hidden";
    });

});

fermerLightbox.addEventListener("click", function () {
    lightbox.classList.remove("ouverte");

    document.body.style.overflow = "auto";
});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        lightbox.classList.remove("ouverte");

        document.body.style.overflow = "auto";
    }

});