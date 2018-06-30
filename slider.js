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

    prev.style.visibility = 'hidden';

    function getX() {
        var matrix = window.getComputedStyle(photos).getPropertyValue('transform').replace(/[^0-9\-.,]/g, '').split(',');
        var x = matrix[12] || matrix[4];
        return (x === undefined || x === NaN) ? 0 : parseInt(x);
    };

    function enableButtons() {
        if (getX() === 0) {
            prev.style.visibility = 'hidden';
        } else if (getX() === -2240) {
            next.style.visibility = 'hidden';
        } else {
            prev.style.visibility = 'visible';
            next.style.visibility = 'visible';
        }

        next.removeAttribute('disabled');
        prev.removeAttribute('disabled');
    }

    next.addEventListener('click', () => {
        next.setAttribute('disabled', true);
        prev.setAttribute('disabled', true);

        window.setTimeout(enableButtons, 500);

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
        next.setAttribute('disabled', true);
        prev.setAttribute('disabled', true);

        window.setTimeout(enableButtons, 500);

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
