//your JS code here. If required.

function openLightbox(image) {
    document.getElementById("lightboxImage").src = image.src;
    $("#lightbox").modal("show");
}
