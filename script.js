// document.getElementById('slider').addEventListener('click', function() {
//    const body = document.body;
//     const sliderCircle = document.getElementById('sliderCircle');
//     const sliderText = document.getElementById('sliderText');

//     if (body.style.backgroundColor === 'black') {
//         body.style.backgroundColor = 'white';
//         sliderCircle.style.left = '2px';
//         sliderCircle.style.backgroundColor = '#fff';
//         sliderText.style.left = '20px';
//         sliderText.style.opacity = '0';
//     } else {
//         body.style.backgroundColor = 'black';
//         sliderCircle.style.left = 'calc(100% - 98px)';
//         sliderCircle.style.backgroundColor = 'pink';
//         sliderText.style.left = 'calc(100% - 200px)';
//         sliderText.style.opacity = '1';
//     }
// });

const slider = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-text");
const questionMark = document.querySelector(".question-mark");

slider.addEventListener("click", function () {
    // slider class
    slider.classList.toggle("active");
    document.body.classList.toggle("active");

    if (slider.classList.contains("active")) {
        // name text
        sliderText.style.opacity = 1;

        // question mark 
        questionMark.style.opacity = 1;
    } else {
        // hiding the text and q.m
        sliderText.style.opacity = 0;
        questionMark.style.opacity = 0;
    }
});
