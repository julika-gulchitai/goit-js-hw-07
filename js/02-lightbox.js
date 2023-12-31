import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('ul');
let galleryElements = document.createElement('li');

galleryElements = galleryItems.map((picture) => 
  `<li class="gallery__item">
   <a class="gallery__link" href="${picture.original}">
      <img
      class="gallery__image"
      src="${picture.preview}"
      alt="${picture.description}" />
   </a>
</li>`).join('');
gallery.innerHTML = galleryElements;

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

console.log(galleryItems);
