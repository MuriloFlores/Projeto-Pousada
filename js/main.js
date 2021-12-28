(function readyJS(win,doc){
    'use strict';

    let btn=doc.querySelector(".hamb-container");
    let menu=doc.querySelector(".menu-escondido");

    function toggle(event) {
        if(menu.classList.contains("show")){
            menu.classList.remove("show");
        }else{
            menu.classList.add("show");

        }
    }
    btn.addEventListener("click",toggle,false);
})(window, document);

