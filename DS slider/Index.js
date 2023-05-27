// Исходные данные по слайдеру (const)
const INFO_TITLES = ["Rostov-on-Don  LCD admiral", "81 m2", "3.5 months"];
["Sochi  Thieves", "105 m2" ," 4 months"];

["Rostov-on-Don Patriotic", "93 m2", "3 months"]
;


const sliderImages = document.querySelectorAll('.info__image'),
    sliderLine = document.querySelector('.info__slider-img'),
    sliderDots = document.querySelectorAll('.info__dot'),
    sliderBtnNext = document.querySelector('.info__vector-next'),
    sliderBtnPrev = document.querySelector('.info__vector-prev'),
    sliderTitles = document.querySelectorAll('.info__link'),
    sliderText = document.querySelectorAll('.info__text ');
    
let sliderCount = 0,
    sliderWidth;
 
//window.addEventListener('resize', showSlide);
 
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);
/*
setInterval(() => {
    nextSlide()
}, 3000);*/


 
function showSlide() {

    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

 
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

 
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;

    rollSlider();
    thisSlide(sliderCount);
}
 
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

 
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('info__dot-activ'));
    sliderDots[index].classList.add('info__dot-activ');
    sliderTitles.forEach(item => item.classList.remove('activ'));
    sliderTitles[index].classList.add('activ');

}

 
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
        sliderText.textContent = INFO_TITLES[index];

    })
});
 

sliderTitles.forEach((linc, index) => {
    linc.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
});
///Адаптив 
const NEXT = document.querySelector('.info__slayder-richt');
const PREV = document.querySelector('.info__slayder-left');

const SLIDER = document.querySelector('.info__slider-mob');
const SLIDER_ITEMS = Array.from(SLIDER.children);
SLIDER_ITEMS.forEach(function (slide, index) {

    if (index !== 0) slide.classList.add('none');


    slide.dataset.index = index;


    SLIDER_ITEMS[0].setAttribute('data-active', '');


    slide.addEventListener('click', function () {
        startSlider('next');
    });
});

NEXT.onclick = function () {

    startSlider('next');
};

PREV.onclick = function () {

    startSlider('prev');
};

function startSlider(algorithm) {

    const CURRENT_IMG = SLIDER.querySelector('[data-active]');
    const CURRENT_IMG_INDEX = +CURRENT_IMG.dataset.index;
    CURRENT_IMG.classList.add('none');
    CURRENT_IMG.removeAttribute('data-active');


    let nextSlideIndex;
    if (algorithm === 'next') {
        nextSlideIndex = CURRENT_IMG_INDEX + 1 === SLIDER_ITEMS.length ? 0 : CURRENT_IMG_INDEX + 1;
    } else if (algorithm === 'prev') {
        nextSlideIndex = CURRENT_IMG_INDEX === 0 ? SLIDER_ITEMS.length - 1 : CURRENT_IMG_INDEX - 1;
    }


    const nextSlide = SLIDER.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('none');
    nextSlide.setAttribute('data-active', '');
}
