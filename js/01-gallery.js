import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const GalleryMarkup = createGalleryMarkups(galleryItems);
// создаем карточу
function createGalleryMarkups(items) {
    return items.map(({preview, original, description}) => {
return`
<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>
`;
}).join(""); 
}


galleryRef.insertAdjacentHTML('beforeend', GalleryMarkup);

function onClickImgCreateModal(e) {
	e.preventDefault();
	if (!e.target.classList.contains("gallery__image")) {
	return };
	const currentImageUrl = e.target.dataset.source;

	const instance = basicLightbox.create(
		`
		<img class="modal__image" src="${currentImageUrl}" />`,
		{
			onShow: () => {
				window.addEventListener("keydown", onKeyPress);
			},
			onClose: () => {
				window.removeEventListener("keydown", onKeyPress);
			},
		}
	);

	instance.show();

	function onKeyPress(event) {
		const isKeyCode = event.code === "Escape";
		if (isKeyCode) {
			instance.close();
			
			window.removeEventListener('keydown, onKeyPress');
		}
	}
// 	galleryRef.addEventListener("click", onClickImgCreateModal);
//   galleryRef.addEventListener("click", onClickImgCreateModal);

  

}

galleryRef.addEventListener("click", onClickImgCreateModal);
  console.log(galleryItems) 


  