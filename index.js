var boton = document.querySelectorAll(".button-list__button");
let ratingContent = document.querySelector(".main__rating-container");
let submitContent = document.querySelector(".main__submit-container");

boton.forEach(btn => {
    btn.addEventListener("click",evt=>{
        btn.style.backgroundColor ="red";
    })
    
})


document.getElementById("btn_submit").addEventListener("click",()=>{
    ratingContent.style.display = "none";
    submitContent.style.display = "inherit";
});
