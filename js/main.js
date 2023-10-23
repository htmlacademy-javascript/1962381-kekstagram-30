// Get DOM elements
const imgUploadInput = document.getElementById('upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;


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
        const imageUrl = URL.createObjectURL(selectedImage);
        imagePreview.src = imageUrl;
        showImageEditForm();
    }
});


const imgUploadCancel = document.querySelector('.img-upload__cancel');
imgUploadCancel.addEventListener('click', closeImageEditForm);


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeImageEditForm();
    }
});
]


const imgUploadInput = document.getElementById('upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;


function showImageEditForm() {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
}


function closeImageEditForm() {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
}


imgUploadInput.addEventListener('change', () => {
    
    const imagePreview = document.querySelector('.img-preview');
    const selectedImage = imgUploadInput.files[0];

    if (selectedImage) {
        
        const imageUrl = URL.createObjectURL(selectedImage);
        imagePreview.src = imageUrl;
        showImageEditForm();
    }
});


const imgUploadCancel = document.querySelector('.img-upload__cancel');
imgUploadCancel.addEventListener('click', closeImageEditForm);


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeImageEditForm();
    }
});
