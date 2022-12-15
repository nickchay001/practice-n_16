import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/-------------BURGER-----------------/
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
	const headerMenu = document.querySelector('.menu-header');
	const headerLogo = document.querySelector('.header__logo');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
		headerLogo.classList.toggle('_active');
	});
}