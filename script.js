profilePic.addEventListener('click', function () {
    overlay.style.display = 'flex';
    overlayImage.src = profilePic.querySelector('img').src;
    overlay.style.animation = 'fadeIn 0.5s';
});

overlay.addEventListener('click', function () {
    overlay.style.animation = 'fadeOut 0.5s';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
});
