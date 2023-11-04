import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(`
    <img class="modal" src="" width="800" height="600">`)

const gallery = document.querySelector('ul');
let galleryElements = document.createElement('li');
galleryElements = galleryItems.map((picture) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${picture.preview}"
      data-source="${picture.original}"
      alt="${picture.description}"
    />
  </a>
</li>`).join('');
gallery.innerHTML = galleryElements;

gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        event.preventDefault();
        instance.show();
        document.querySelector('.modal').src = event.target.dataset.source;  
    }
})

document.addEventListener('keydown', (event) => {
    if (event.target.tagName === 'Escape') 
        document.querySelector('.modal').src = event.target.dataset.source;
        instance.close();
});
console.log(galleryItems);