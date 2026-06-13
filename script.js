// ================= SEARCH FUNCTION =================

const searchInput = document.querySelector(".search-input");

const productBoxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    productBoxes.forEach((box) => {

        const productName = box.querySelector("h2").textContent.toLowerCase();

        if (productName.includes(searchValue)) {

            box.style.display = "block";

        } else {

            box.style.display = "none";

        }

    });

});


// ================= BACK TO TOP =================

const backToTop = document.querySelector(".foot-1");

backToTop.style.cursor = "pointer";

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================= NAVBAR SHADOW =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ================= PRODUCT HOVER EFFECT =================

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "translateY(-5px)";

        box.style.transition = "0.3s";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "translateY(0)";

    });

});


// ================= SEE MORE CLICK =================

const seeMore = document.querySelectorAll(".box-content p");

seeMore.forEach((item) => {

    item.style.cursor = "pointer";

    item.addEventListener("click", () => {

        alert("Product page coming soon!");

    });

});