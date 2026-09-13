/* ========================================
   FOTO TOKO
======================================== */



const shopPhoto =
    document.querySelector(".shop-photo");


const lightbox =
    document.getElementById("lightbox");


const lightboxImage =
    document.getElementById("lightboxImage");


const closeButton =
    document.getElementById("lightboxClose");


/* ========================================
   BUKA FOTO
======================================== */

shopPhoto.addEventListener(
    "click",
    function () {

        const image =
            shopPhoto.dataset.image;


        lightboxImage.src = image;


        lightbox.classList.add("active");


        /*
            Menghentikan scroll halaman
            ketika foto dibuka.
        */

        document.body.style.overflow =
            "hidden";

    }
);


/* ========================================
   TUTUP FOTO
======================================== */

function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* ========================================
   TOMBOL X
======================================== */

closeButton.addEventListener(
    "click",
    function () {

        closeLightbox();

    }
);


/* ========================================
   KLIK AREA GELAP
======================================== */

lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


/* ========================================
   TOMBOL ESC
======================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);

/* ========================================
   ANIMASI SAAT WEBSITE DIBUKA & SCROLL
======================================== */

const animatedElements = document.querySelectorAll(
    ".profile, .about, .gallery-section, .contact, footer"
);


const animationObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                /*
                    Hapus class ketika keluar layar
                    supaya animasi bisa muncul lagi
                    ketika discroll kembali.
                */

                entry.target.classList.remove("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(function (element) {

    animationObserver.observe(element);

});