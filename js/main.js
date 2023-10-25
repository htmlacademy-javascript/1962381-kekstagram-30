// Get DOM elements
const imgUploadInput = document.getElementById('upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;
const imgUploadCancel = document.querySelector('.img-upload__cancel');

function showImageEditForm() {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

function closeImageEditForm() {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
}


imgUploadInput.addEventListener('change', () => {
  // Assuming you have an image preview element with class .img-preview
  const imagePreview = document.querySelector('.img-preview');
  const selectedImage = imgUploadInput.files[0];

  if (selectedImage) {
    // Display the selected image in the preview
    imagePreview.src = URL.createObjectURL(selectedImage);
    showImageEditForm();
  }
});

imgUploadCancel.addEventListener('click', closeImageEditForm);


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeImageEditForm();
  }
});

imgUploadCancel.addEventListener('click', closeImageEditForm);


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeImageEditForm();
  }
});
