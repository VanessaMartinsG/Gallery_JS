//--------- VARIAVEIS GLOBAIS ---------
let btnOpenMenu = document.querySelector(".side-menu__button--hamburguer");
let modal = document.querySelector(".modal");
let modalImg = modal.querySelector(".modal__image");
let modalLike = modal.querySelector(".modal__like");
let images = document.querySelectorAll(".item__image");
let selectImg = null;
let backBtn = modal.querySelector(".previous")
let nextBtn = modal.querySelector(".next")


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

    changeLike(selectImg);
    if (modalLike.classList.contains("hidden"))
        modalLike.classList.remove("hidden");
    else
        modalLike.classList.add("hidden");
});


// ----------- MODAL ------------

//** Abre o modal de acordo com a img
function openModal(img) {
    if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden");
        updateModal(img);
    }
}

//** Ele coloca a foto no modal, verifica se esta com like e chama a função de trocar imagem
function updateModal(img) {
    modalImg.src = img.src;
    selectImg = img;
    if (hasLike(img))
        modalLike.classList.remove("hidden");
    else
        modalLike.classList.add("hidden");
    changeArrows(img);
}

//** Fecha o modal
modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal") || e.target.parentNode.classList.contains("close")) {
        modal.classList.add("hidden");
        modalImg.src = "";
        modalLike.classList.add("hidden");
        selectImg = null;
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


// ----------- NEXT & BACK BOTÃO MODAL ----------

//** Essa função esconde a primeira e ultima flecha
function changeArrows(img) {
    let card = img.parentNode;
    if (card.previousElementSibling == null)
        backBtn.style.display = "none";
    else
        backBtn.style.display = "block";

    if (card.nextElementSibling == null)
        nextBtn.style.display = "none";
    else
        nextBtn.style.display = "block";
}

//** Realiza a ação de voltar as imagens
backBtn.addEventListener("click", () => {
    let backCard = selectImg.parentNode.previousElementSibling;
    let backImg = backCard.querySelector(".item__image");
    updateModal(backImg);
})

//** Realiza a ação de avançar as imagens
nextBtn.addEventListener("click", () => {
    let nextCard = selectImg.parentNode.nextElementSibling;
    let nextImg = nextCard.querySelector(".item__image");
    updateModal(nextImg);
})

