import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPicture = document.querySelector('.gallery');
let selectPicture = null;
galleryPicture.addEventListener('click', onGalleryPictureClick );

function onGalleryPictureClick (e){
 if (e.target !== '');
 return;

const activePicture = document.querySelector('.gallery__image ');

console.log (activePicture);

if(activePicture){
    activePicture.classList.remove('.gallery__image ');
}
const nextActivePicture = e.target
nextActivePicture.classList.add('.gallery__image ');
selectPicture = nextActivePicture.dataset.value;
console.log(selectPicture)
};


