// Исходные данные по слайдеру (const)
const INFO_TITLES = [
  {
    city: "Rostov-on-Don <br> LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
  },
  {
    city: "Sochi <br> Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
  },
  {
    city: "Rostov-on-Don <br> Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
  },
];

const sliderImages = document.querySelectorAll(".info__image"),
  sliderImagesMob = document.querySelectorAll(".info__image-mobile"),
  sliderLine = document.querySelector(".info__slider-img"),
  sliderLineMob = document.querySelector(".info__slider-mob"),
  sliderDots = document.querySelectorAll(".info__dot"),
  sliderBtnNext = document.querySelector(".info__vector-next"),
  sliderBtnNextMob = document.querySelector(".info__slayder-richt"),
  sliderBtnPrev = document.querySelector(".info__vector-prev"),
  sliderBtnPrevMob = document.querySelector(".info__slayder-left"),
  sliderTitles = document.querySelectorAll(".info__link"),
  sliderText = document.querySelector(".info__text");

// Переменные

let sliderCount = 0,
  sliderWidth;

// Адаптивность слайдера
window.addEventListener("resize", showSlide);

// Кнопки листания слайдов вперед и назад
sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);
sliderBtnNextMob.addEventListener("click", nextSlide);
sliderBtnPrevMob.addEventListener("click", prevSlide);
// Автоматическое перелистывание слайдов
/*setInterval(() => {
  nextSlide();
}, 3000);*/

// Функции ==================
function INFO() {
  const data = INFO_TITLES[sliderCount];
  for (element in data) {
    document.querySelector(`.info__text.${element}`).innerHTML = data[element];
  }
}

// Задает нужную ширину картинки и sliderLine
function showSlide() {
  sliderWidth = document.querySelector(".slider").offsetWidth;

  sliderLine.style.width = sliderWidth * sliderImages.length + "px";
  sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));
  sliderWidthMob = document.querySelector(".info__slider-adaptiv").offsetWidth;

  sliderLineMob.style.width = sliderWidthMob * sliderImagesMob.length + "px";
  sliderImagesMob.forEach((item) => (item.style.width = sliderWidthMob + "px"));

  rollSlider();
}

showSlide();
// Перелистывает слайд вперед
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;
  if (sliderCount >= sliderImagesMob.length) sliderCount = 0;
  rollSlider();
  thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;
  if (sliderCount < 0) sliderCount = sliderImagesMob.length - 1;
  rollSlider();
  thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  sliderLineMob.style.transform = `translateX(${
    -sliderCount * sliderWidthMob
  }px)`;
  INFO();
}
// Указывает как слайд по счету активен дот и ссылка
function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("info__dot-activ"));
  sliderDots[index].classList.add("info__dot-activ");
  sliderTitles.forEach((item) => item.classList.remove("activ"));
  sliderTitles[index].classList.add("activ");
}
// Вешает клик на dot
sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});
// Вешает клик на ссылку
sliderTitles.forEach((linc, index) => {
  linc.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});
