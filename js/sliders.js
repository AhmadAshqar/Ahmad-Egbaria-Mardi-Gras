const images = document.querySelectorAll(".mySlides");
const descriptions = document.querySelectorAll(".pic-words");
const interval = 5000;
slideshow(images, descriptions, interval);



function slideshow(images, descriptions, interval) {
    let index = 0;

    function showImage(n) {
        index = (n + images.length) % images.length;

        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
            descriptions[i].style.display = "none";
        }

        images[index].style.display = "block";
        descriptions[index].style.display = "block";
    }

    showImage(0);
    setInterval(() => showImage(index + 1), interval);
}
