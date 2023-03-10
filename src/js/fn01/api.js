export default function displayListGallery(listGallery) {
  return listGallery
    .map((item) => {
      return `
        <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" 
            src="${item.preview}" 
            alt="${item.description}"
          />
        </a>
      `;
    })
    .join('');
}
