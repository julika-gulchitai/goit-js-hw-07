import { galleryItems } from './gallery-items.js';
// Change code below this line

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

let instance = 0;
const onGalleryImgClick = (event) => {
    const sourcePath = event.target.dataset.source;
      if (event.target.tagName !== 'IMG') return;
instance = basicLightbox.create(`
    <img class="modal" src="${sourcePath}" >`, {
    onShow: () => { document.addEventListener('keydown', onEscapeKeyClick) },
    onClose: () => {document.removeEventListener('keydown', onEscapeKeyClick) }});

    event.preventDefault();
    instance.show();
}

gallery.addEventListener('click', onGalleryImgClick);

function onEscapeKeyClick(event) {
    if (event.code !== 'Escape') return;
    instance.close();
};

console.log(galleryItems);