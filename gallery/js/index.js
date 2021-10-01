let btnOpenMenu = document.querySelector(".side-menu__button--hamburguer");

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

document.querySelectorAll(".item__image").forEach(img => {
    img.addEventListener("dblclick", () => {
        let like = img.parentNode.querySelector(".item__like");
        if (like != null) {
            if (like.classList.contains("hidden"))
                like.classList.remove("hidden");
            else
                like.classList.add("hidden");
        }
    });
});