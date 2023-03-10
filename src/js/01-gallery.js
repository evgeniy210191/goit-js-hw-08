// Add imports above this line
import { galleryItems } from './gallery-items';
import displayListGallery from './fn01/api.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryContainer = document.querySelector('.gallery');

const showGallery = displayListGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeEnd', showGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  scrollZoom: false,
  disableScroll: true,
  captionDelay: 250,
  captions: true,
  captionsData: 'alt',
});
