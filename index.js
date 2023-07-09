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

const sliderLine = document.querySelector(".info__slider-img"),
  sliderDots = document.querySelectorAll(".info__dot"),
  sliderBtnNext = document.querySelector(".info__vector-next"),
  sliderBtnPrev = document.querySelector(".info__vector-prev"),
  sliderTitles = document.querySelectorAll(".info__link"),
  sliderText = document.querySelector(".info__text");

// Переменные

let sliderCount = 0;

// Функции ==================
function INFO_ROOM() {
  const data = INFO_TITLES[sliderCount];
  for (element in data) {
    document.querySelector(`.info__text.${element}`).innerHTML = data[element];
  }
}
function startSlider(algorithm) {
  const CURRENT_IMG = sliderLine.querySelector("[data-active]");
  const CURRENT_IMG_INDEX = +CURRENT_IMG.dataset.index;
  CURRENT_IMG.classList.add("none");
  CURRENT_IMG.removeAttribute("data-active");

  if (algorithm === "next") {
    sliderCount =
      CURRENT_IMG_INDEX + 1 === SLIDER_INFO.length ? 0 : CURRENT_IMG_INDEX + 1;
  } else if (algorithm === "prev") {
    sliderCount =
      CURRENT_IMG_INDEX === 0 ? SLIDER_INFO.length - 1 : CURRENT_IMG_INDEX - 1;
  }

  const nextSlide = sliderLine.querySelector(`[data-index="${sliderCount}"]`);
  nextSlide.classList.remove("none");
  nextSlide.setAttribute("data-active", "");
}

// Перелистывает слайд вперед
sliderBtnNext.onclick = function () {
  sliderCount++;
  if (sliderCount >= SLIDER_INFO.length) sliderCount = 0;
  INFO_ROOM(sliderCount);
  thisSlide(sliderCount);
  startSlider("next");
};
// Перелистывает слайд назад
sliderBtnPrev.onclick = function () {
  sliderCount--;
  if (sliderCount < 0) sliderCount = SLIDER_INFO.length - 1;
  INFO_ROOM(sliderCount);
  thisSlide(sliderCount);
  startSlider("prev");
};

// Указывает как слайд по счету активен дот и ссылка
function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("info__dot-activ"));
  sliderDots[index].classList.add("info__dot-activ");
  sliderTitles.forEach((item) => item.classList.remove("activ"));
  sliderTitles[index].classList.add("activ");
}
SLIDER_INFO = Array.from(sliderLine.children);
SLIDER_INFO.forEach(function (slide, index) {
  if (index !== 0) slide.classList.add("none");

  slide.dataset.index = index;

  SLIDER_INFO[0].setAttribute("data-active", "");
});

// Вешает клик на dot
sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    INFO_ROOM(sliderCount);
    thisSlide(sliderCount);
    startSlider(sliderCount);
  });
});
// Вешает клик на ссылку
sliderTitles.forEach((linc, index) => {
  linc.addEventListener("click", () => {
    sliderCount = index;
    INFO_ROOM(sliderCount);
    thisSlide(sliderCount);
    startSlider(sliderCount);
  });
});

///Адаптив
const NEXT_BTN = document.querySelector(".info__slayder-richt"),
  PREV_BTN = document.querySelector(".info__slayder-left"),
  SLIDER_ADAPTIV = document.querySelector(".info__slider-mob"),
  SLIDER_ITEMS = Array.from(SLIDER_ADAPTIV.children);
SLIDER_ITEMS.forEach(function (slide, index) {
  if (index !== 0) slide.classList.add("none");

  slide.dataset.index = index;

  SLIDER_ITEMS[0].setAttribute("data-active", "");
});

NEXT_BTN.onclick = function () {
  startSliderAdaptiv("next");
  INFO_ROOM(sliderCount);
};

PREV_BTN.onclick = function () {
  startSliderAdaptiv("prev");
  INFO_ROOM(sliderCount);
};
function startSliderAdaptiv(algorithm) {
  const CURRENT_IMG = SLIDER_ADAPTIV.querySelector("[data-active]");
  const CURRENT_IMG_INDEX = +CURRENT_IMG.dataset.index;
  CURRENT_IMG.classList.add("none");
  CURRENT_IMG.removeAttribute("data-active");

  if (algorithm === "next") {
    sliderCount =
      CURRENT_IMG_INDEX + 1 === SLIDER_ITEMS.length ? 0 : CURRENT_IMG_INDEX + 1;
  } else if (algorithm === "prev") {
    sliderCount =
      CURRENT_IMG_INDEX === 0 ? SLIDER_ITEMS.length - 1 : CURRENT_IMG_INDEX - 1;
  }

  const nextSlide = SLIDER_ADAPTIV.querySelector(
    `[data-index="${sliderCount}"]`
  );
  nextSlide.classList.remove("none");
  nextSlide.setAttribute("data-active", "");
}
