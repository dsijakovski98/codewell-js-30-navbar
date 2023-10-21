const burger = document.querySelector('.burger')
const navMenu = document.querySelector('.links-container')
const backdrop = document.querySelector('nav .backdrop')

const toggleMenu = () => {
	const expanded = navMenu.getAttribute('aria-expanded')
	const newExpanded = expanded === 'true' ? 'false' : 'true'

	navMenu.setAttribute('aria-expanded', newExpanded)

	const icon = burger.querySelector('i')
	const [oldIcon, newIcon] = expanded === 'true' ? ['times', 'bars'] : ['bars', 'times']

	icon.className = icon.className.replace(oldIcon, newIcon)
}

burger.addEventListener('click', toggleMenu)
backdrop.addEventListener('click', toggleMenu)
