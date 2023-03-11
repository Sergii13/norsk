// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';
import { bodyLockToggle, bodyLock, bodyUnlock } from './functions.js';
const btnCart = document.querySelector('.nf-cart__button-open');
if (btnCart) {
  btnCart;
}
window.addEventListener('load', () => {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nf-cart__button-open')) {
      document.documentElement.classList.toggle('cart-open');
      bodyLockToggle();
    } else if (
      document.documentElement.classList.contains('cart-open') &&
      !e.target.closest('.nf-cart')
    ) {
      document.documentElement.classList.remove('cart-open');
      bodyUnlock();
    }
  });
});
