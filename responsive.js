// DOM Elements
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const mainGrid = document.querySelector('#grid');
const links = document.querySelectorAll('.links');

let sidebarActive = false;


closeMenu.addEventListener('click', () => {
	sidebarActive = false
	for(let i = 0; i < links.length; i++){
		links[i].style.display = 'none';
	}
	mainGrid.classList.remove('main-grid-active')
	mainGrid.classList.add('main-grid')
	closeMenu.style.display = 'none';
	openMenu.style.display = 'inline-table';
})
openMenu.addEventListener('click', () => {
	sidebarActive = true;
	for(let i = 0; i < links.length; i++){
		links[i].style.display = 'inline-block';
		links[i].addEventListener('click', () => {
			for(let j = 0; j < links.length; j++){
				links[j].style.display = 'none';
			}
			mainGrid.classList.remove('main-grid-active')
			mainGrid.classList.add('main-grid')
			closeMenu.style.display = 'none';
			openMenu.style.display = 'inline-table';
		})
	}
	mainGrid.classList.remove('main-grid')
	mainGrid.classList.add('main-grid-active')
	closeMenu.style.display = 'inline-table';
	openMenu.style.display = 'none';
})



