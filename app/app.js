const burger = document.querySelector('.burger')
const navMenu = document.querySelector('.links-container')

burger.addEventListener('click', () => {
	const expanded = navMenu.getAttribute('aria-expanded')
	const newExpanded = expanded === 'true' ? 'false' : 'true'

	navMenu.setAttribute('aria-expanded', newExpanded)

	const icon = burger.querySelector('i')
	const [oldIcon, newIcon] = expanded === 'true' ? ['times', 'bars'] : ['bars', 'times']

	icon.className = icon.className.replace(oldIcon, newIcon)
})
