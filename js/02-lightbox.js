import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImages = document.querySelector(".gallery");

//Markup-ul elementelor din galerie
const elemMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join("");

galleryImages.insertAdjacentHTML("beforeend", elemMarkup);

const galleryLink = document.querySelectorAll(".gallery__link");
galleryLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

//simplelightbox
var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
