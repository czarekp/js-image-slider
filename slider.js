(function () {
    const images = ['fjords.jpg', 'lights.jpg', 'nature.jpg', 'safari.jpg', 'snow.jpg'];
    const photos = document.getElementById('photos');

    for (let i = 0; i < images.length; i++) {
        const photo = document.createElement('img');
        photo.setAttribute('src', 'img/' + images[i]);
        photos.appendChild(photo);
    }

    const next = document.getElementById('next');
    const prev = document.getElementById('prev');


    function getX() {
        var matrix = window.getComputedStyle(photos).getPropertyValue('transform').replace(/[^0-9\-.,]/g, '').split(',');
        var x = matrix[12] || matrix[4];
        return (x === undefined || x === NaN) ? 0 : parseInt(x);
    };

    next.addEventListener('click', () => {
        photos.animate([
            // keyframes
            {
                transform: 'translateX(' + getX() + 'px)'
            },
            {
                transform: 'translateX(' + (getX() - 560) + 'px)'
            }], {
            // timing options
            duration: 500,
            iterations: 1,
            easing: 'ease',
            fill: 'forwards'
        });
    });

    prev.addEventListener('click', () => {
        photos.animate([
            // keyframes
            {
                transform: 'translateX(' + getX() + 'px)'
            },
            {
                transform: 'translateX(' + (getX() + 560) + 'px)'
            }], {
            // timing options
            duration: 500,
            iterations: 1,
            easing: 'ease',
            fill: 'forwards'
        });
    });
})();
