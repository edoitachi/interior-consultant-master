// navbar button
const navBtn = document.querySelector('.nav-btn')
const navMenu = document.querySelector('.nav-nav')
navBtn.addEventListener('click', () => {
	let currentButton = navBtn.children[0]
	navMenu.classList.toggle('visible')
	currentButton.innerText == 'close'
		? (currentButton.innerText = 'menu')
		: (currentButton.innerText = 'close')
})
