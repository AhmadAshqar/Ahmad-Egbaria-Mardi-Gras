const gallery = document.querySelector(".galleryclick");
const overlay = document.querySelector("#overlay");

gallery.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {

        overlay.style.display = "flex";
        overlay.querySelector("#enlarged-img").src = img.src;
    });
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});