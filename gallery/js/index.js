//--------- VARIAVEIS GLOBAIS ---------
let btnOpenMenu = document.querySelector(".side-menu__button--hamburguer");


// -------- MENU LATERAL ---------
btnOpenMenu.addEventListener("click", () => {
    let sideMenu = document.querySelector(".side-menu");
    let btnCloseMenu = btnOpenMenu.querySelector(".side-menu__icon");

    if (sideMenu.classList.contains("closed")) {
        sideMenu.classList.remove("closed");
        btnCloseMenu.src = "./assets/open-menu.svg"
    } else {
        sideMenu.classList.add("closed");
        btnCloseMenu.src = "./assets/closed-menu.svg"
    }
});

// --------- LIKE/DISLIKE GALERIA ---------

function like(img) {
    let like = img.parentNode.querySelector(".item__like");
    if (like != null) {
        if (like.classList.contains("hidden"))
            like.classList.remove("hidden");
        else
            like.classList.add("hidden");
    }
}







