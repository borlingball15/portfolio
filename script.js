document.getElementById('slider').addEventListener('click', function() {
   const body = document.body;
    const sliderCircle = document.getElementById('sliderCircle');
    const sliderText = document.getElementById('sliderText');

    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        sliderCircle.style.left = '2px';
        sliderCircle.style.backgroundColor = '#fff';
        sliderText.style.left = '20px';
        sliderText.style.opacity = '0';
    } else {
        body.style.backgroundColor = 'black';
        sliderCircle.style.left = 'calc(100% - 98px)';
        sliderCircle.style.backgroundColor = 'pink';
        sliderText.style.left = 'calc(100% - 200px)';
        sliderText.style.opacity = '1';
    }
});
