import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryPicture = document.querySelector('.gallery');

const galleryEl = galleryItems
    .map(({ preview, description, original }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`)
    .join('');

galleryPicture.insertAdjacentHTML('beforeend', galleryEl)

galleryPicture.addEventListener('click', onImgClick)

function onImgClick(e) {
    evt.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const modal = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`,

        {   onShow: () => window.addEventListener('keydown', onEscKeyPress),
            onClose: () => window.removeEventListener('keydown', onEscKeyPress),
        }
    );
    
    modal.show();

    function onEscKeyPress(e) {   
        if (e.code === "Escape") {
            modal.close();
        }
    }
}