var boton = document.querySelectorAll(".button-list__button");
let ratingContent = document.querySelector(".main__rating-container");
let submitContent = document.querySelector(".main__submit-container");
let rating = document.querySelector(".submit__span");


boton.forEach(btn => {
    btn.onclick = () => {
        boton.forEach(btn => {
            /* Quitar estado a todos los botones */
            btn.classList.remove('button-list__button--activo');
        });
        /* Agregar estado del boton */
        btn.classList.add('button-list__button--activo');
        rating.innerHTML = btn.innerHTML;
        /* Cambiar de pantalla  */
        document.getElementById("btn_submit").addEventListener("click",()=>{
            ratingContent.style.display = "none";
            submitContent.style.display = "inherit";
        });
    }
});