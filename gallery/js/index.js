//--------- VARIAVEIS GLOBAIS ---------
let btnOpenMenu = document.querySelector(".side-menu__button--hamburguer");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal__image");
let modalLike = modal.querySelector(".modal__like");
let images = document.querySelectorAll(".item__image");


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

//** Verifica se a imagem tem ou não o like - Retorna o estado
function hasLike(img) {
    let like = img.parentNode.querySelector(".item__like");
    if (like != null) {
        if (like.classList.contains("hidden"))
            return false;
        else
            return true;
    }
}

//** Coloca ou retira o like por fora do modal
function changeLike(img) {
    let like = img.parentNode.querySelector(".item__like");
    if (like != null) {
        if (like.classList.contains("hidden"))
            like.classList.remove("hidden");
        else
            like.classList.add("hidden");
    }
}

//** Colocar like pelo modal
modalImg.addEventListener("dblclick", () => {
    images.forEach(img => {
        if (img.src == modalImg.src) {
            changeLike(img);
            if (modalLike.classList.contains("hidden"))
                modalLike.classList.remove("hidden");
            else
                modalLike.classList.add("hidden");
        }
    });
});


// ----------- MODAL ------------

//** Abre o modal de acordo com a img
function openModal(img) {
    if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden");
        modalImg.src = img.src;
        if (hasLike(img))
            modalLike.classList.remove("hidden");
    }
}

//** Fecha o modal
modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal") || e.target.parentNode.classList.contains("close")) {
        modal.classList.add("hidden");
        modalImg.src = "";
        modalLike.classList.add("hidden");
    }
});


// --------- CLICK SIMPLES OU DOUBLE CLICK -------

let clickCounter = 0;
images.forEach(img => {
    img.addEventListener("click", () => {
        clickCounter++;
        if (clickCounter === 1) {
            time = setTimeout(() => {
                clickCounter = 0;
                openModal(img);
            }, 400);
        } else if (clickCounter === 2) {
            clearTimeout(time);
            clickCounter = 0;
            changeLike(img);
        }
    });
});


