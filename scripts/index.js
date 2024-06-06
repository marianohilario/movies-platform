var elem = document.querySelector(".carousel");
var instance = M.Carousel.init(elem, {
    duration: 400,
});

// setInterval(()=>{
//   if(!instance.pressed){
//     instance.next();
//   }
// },30000)

const carouselItems = document.querySelectorAll(".carousel-item");
const carouselItemsImg = document.querySelectorAll(".carousel-item-img");
const watchTrailer = document.querySelector(".play");
const closeBtn = document.querySelector(".close");

document.addEventListener("DOMContentLoaded", (event) => {
    watchTrailer.dataset.trailer = carouselItemsImg[0].dataset.trailer;
});

carouselItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        const bg = e.target.dataset.bg;
        const title = e.target.dataset.title;
        const trailer = e.target.dataset.trailer;
        changeBg(bg, title, trailer);
    });
});

watchTrailer.addEventListener("click", toggleVideo);

closeBtn.addEventListener("click", toggleVideo);

function toggleVideo() {
    const trailer = document.querySelector(".trailer");
    const iframe = document.querySelector("iframe");

    trailer.classList.toggle("active");
    trailer.classList.contains("active")
        ? (iframe.src =
            watchTrailer.dataset.trailer + "&autoplay=1")
        : (iframe.src = "");
}

function changeBg(bg, title, trailer) {
    const banner = document.querySelector(".banner");
    const contents = document.querySelectorAll(".content");
    const iframe = document.querySelector("iframe");
    banner.style.background = `url('../images/movies/${bg}')`;
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition = "center";

    contents.forEach((content) => {
        content.classList.remove("active");
        if (content.classList.contains(title)) content.classList.add("active");
    });

    watchTrailer.dataset.trailer = trailer;
}
