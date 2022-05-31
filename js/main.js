let btn = document.querySelector(".hamb-container");
let menu = document.querySelector(".menu-escondido");

function toggle(event) {
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");

    }
}

btn.addEventListener("click", toggle);


