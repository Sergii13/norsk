/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Scrollbar, Thumbs } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
//import '../../scss/base/swiper.scss';
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import 'swiper/css';
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector('.swiper2')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.swiper', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			  // Ефекти
			  effect: 'fade',
			  autoplay: {
				  delay: 3000,
				  disableOnInteraction: false,
			  },
			  */

      // Пагінація
      /*
			  pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
			  },
			  */

      // Скроллбар
      /*
			  scrollbar: {
				  el: '.swiper-scrollbar',
				  draggable: true,
			  },
			  */

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      /*
			  // Брейкпоінти
			  breakpoints: {
				  640: {
					  slidesPerView: 1,
					  spaceBetween: 0,
					  autoHeight: true,
				  },
				  768: {
					  slidesPerView: 2,
					  spaceBetween: 20,
				  },
				  992: {
					  slidesPerView: 3,
					  spaceBetween: 20,
				  },
				  1268: {
					  slidesPerView: 4,
					  spaceBetween: 30,
				  },
			  },
			  */
      // Події
      on: {},
    });
  }
  let thumbs;
  if (document.querySelector('.nf-product-thumb__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    thumbs = new Swiper('.nf-product-thumb__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 5,
      spaceBetween: 8,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			  // Ефекти
			  effect: 'fade',
			  autoplay: {
				  delay: 3000,
				  disableOnInteraction: false,
			  },
			  */

      // Пагінація
      /*
			  pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
			  },
			  */

      // Скроллбар
      /*
			  scrollbar: {
				  el: '.swiper-scrollbar',
				  draggable: true,
			  },
			  */

      // Кнопки "вліво/вправо"
      /*
			  // Брейкпоінти
			  breakpoints: {
				  640: {
					  slidesPerView: 1,
					  spaceBetween: 0,
					  autoHeight: true,
				  },
				  768: {
					  slidesPerView: 2,
					  spaceBetween: 20,
				  },
				  992: {
					  slidesPerView: 3,
					  spaceBetween: 20,
				  },
				  1268: {
					  slidesPerView: 4,
					  spaceBetween: 30,
				  },
			  },
			  */
      // Події
      on: {},
    });
  }
  if (document.querySelector('.nf-product__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.nf-product__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Thumbs, Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 16,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			  // Ефекти
			  effect: 'fade',
			  autoplay: {
				  delay: 3000,
				  disableOnInteraction: false,
			  },
			  */

      // Пагінація
      /*
			  pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
			  },
			  */

      // Скроллбар

      scrollbar: {
        el: '.nf-product__scrollbar',
        draggable: true,
      },

      thumbs: {
        swiper: thumbs,
      },
      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 1,
        },
      },

      // Події
      on: {},
    });
  }
  if (document.querySelector('.nf-tema2__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.nf-tema2__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			  // Ефекти
			  effect: 'fade',
			  autoplay: {
				  delay: 3000,
				  disableOnInteraction: false,
			  },
			  */

      // Пагінація
      /*
			  pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
			  },
			  */

      // Скроллбар

      scrollbar: {
        el: '.nf-tema2__scrollbar',
        draggable: true,
      },

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: '.nf-tema2__prev',
        nextEl: '.nf-tema2__next',
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },

      // Події
      on: {},
    });
  }
}
// Ініціалізація слайдерів
let mySwiper, mySwiper2;
function initSlidersBreakpoint() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector('.nf-gift-block__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    mySwiper = new Swiper('.nf-gift-block__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      speed: 800,
      scrollbar: {
        el: '.nf-gift-block__scrollbar',
        hide: false,
      },
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      //   navigation: {
      //     prevEl: '.swiper-button-prev',
      //     nextEl: '.swiper-button-next',
      //   },
      /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // Події
      on: {},
    });
  }
  if (document.querySelector('.nf-team__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    mySwiper2 = new Swiper('.nf-team__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      speed: 800,
      scrollbar: {
        el: '.nf-team__scrollbar',
        hide: false,
      },
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      //   navigation: {
      //     prevEl: '.swiper-button-prev',
      //     nextEl: '.swiper-button-next',
      //   },
      /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // Події
      on: {},
    });
  }
}
const breakpoint = window.matchMedia('(min-width:768px)');
// keep track of swiper instances to destroy later
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointChecker = function () {
  // if larger viewport and multi-row layout needed
  if (breakpoint.matches === true) {
    // clean up old instances and inline styles when available
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    if (mySwiper2 !== undefined) mySwiper2.destroy(true, true);
    // or/and do nothing
    return;
    // else if a small viewport and single column layout needed
  } else if (breakpoint.matches === false) {
    // fire small viewport version of swiper
    return initSlidersBreakpoint();
  }
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiper = function () {
  mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    a11y: true,
    keyboardControl: true,
    grabCursor: true,
    // pagination
    pagination: '.swiper-pagination',
    paginationClickable: true,
  });
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
