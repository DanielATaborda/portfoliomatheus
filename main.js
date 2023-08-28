const menuMobile = document.querySelector(".menuMobile");

menuMobile.addEventListener("click", () =>{
    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active");
})