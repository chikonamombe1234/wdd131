const images = document.querySelectorAll("main img");

function fadeInImage(image) {
  image.classList.add("is-loaded");
}

images.forEach((image) => {
  image.addEventListener("load", () => fadeInImage(image), { once: true });

  // Also handle an image that finished loading before this script ran.
  if (image.complete && image.naturalWidth > 0) {
    fadeInImage(image);
  }
});

const modifiedDate = new Date(document.lastModified);
const dateElement = document.querySelector("#last-modified");

if (!Number.isNaN(modifiedDate.getTime()) && dateElement) {
  dateElement.dateTime = modifiedDate.toISOString();
  dateElement.textContent = modifiedDate.toLocaleString();
}
